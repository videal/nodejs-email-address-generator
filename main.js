var handlebars = require('handlebars');

/**
 * Register helper, that checks for the existence of parameters
 */
handlebars.registerHelper('if_all', function () {
    var args = [].slice.apply(arguments);
    var opts = args.pop();

    var fn = opts.fn;
    for (var i = 0; i < args.length; ++i) {
        if (args[i])
            continue;
        fn = opts.inverse;
        break;
    }
    return fn(this);
});

var localRules = [
    '{{#if firstName}}{{firstName}}@{{companyDomain}}{{/if}}',
    '{{#if lastName}}{{lastName}}@{{companyDomain}}{{/if}}',
    '{{#if_all firstName lastName}}{{firstName}}{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName lastName}}{{lastName}}{{firstName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName lastName}}{{firstName}}.{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName lastName}}{{lastName}}.{{firstName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName lastName}}{{firstName}}-{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName lastName}}{{lastName}}-{{firstName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName lastName}}{{firstName}}_{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName lastName}}{{lastName}}_{{firstName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName lastNameInitial}}{{firstName}}{{lastNameInitial}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName lastNameInitial}}{{firstName}}.{{lastNameInitial}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName lastNameInitial}}{{firstName}}-{{lastNameInitial}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName lastNameInitial}}{{firstName}}_{{lastNameInitial}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName middleName lastName}}{{firstName}}{{middleName}}{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName middleName lastName}}{{firstName}}.{{middleName}}.{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName middleName lastName}}{{firstName}}-{{middleName}}-{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName middleName lastName}}{{firstName}}_{{middleName}}_{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName middleNameInitial lastName}}{{firstName}}{{middleNameInitial}}{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName middleNameInitial lastName}}{{firstName}}.{{middleNameInitial}}.{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName middleNameInitial lastName}}{{firstName}}-{{middleNameInitial}}-{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName middleNameInitial lastName}}{{firstName}}_{{middleNameInitial}}_{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all lastName firstNameInitial}}{{lastName}}{{firstNameInitial}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all lastName firstNameInitial}}{{lastName}}.{{firstNameInitial}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all lastName firstNameInitial}}{{lastName}}-{{firstNameInitial}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all lastName firstNameInitial}}{{lastName}}_{{firstNameInitial}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstNameInitial lastName}}{{firstNameInitial}}{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstNameInitial lastName}}{{firstNameInitial}}.{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstNameInitial lastName}}{{firstNameInitial}}-{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstNameInitial lastName}}{{firstNameInitial}}_{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstNameInitial lastNameInitial}}{{firstNameInitial}}{{lastNameInitial}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstNameInitial lastNameInitial}}{{firstNameInitial}}.{{lastNameInitial}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstNameInitial lastNameInitial}}{{firstNameInitial}}-{{lastNameInitial}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstNameInitial lastNameInitial}}{{firstNameInitial}}_{{lastNameInitial}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstNameInitial middleNameInitial lastName}}{{firstNameInitial}}{{middleNameInitial}}{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstNameInitial middleNameInitial lastName}}{{firstNameInitial}}{{middleNameInitial}}.{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstNameInitial middleNameInitial lastName}}{{firstNameInitial}}{{middleNameInitial}}-{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstNameInitial middleNameInitial lastName}}{{firstNameInitial}}{{middleNameInitial}}_{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all lastNameInitial firstName}}{{lastNameInitial}}{{firstName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all lastNameInitial firstName}}{{lastNameInitial}}.{{firstName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all lastNameInitial firstName}}{{lastNameInitial}}-{{firstName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all lastNameInitial firstName}}{{lastNameInitial}}_{{firstName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all lastNameInitial firstNameInitial}}{{lastNameInitial}}{{firstNameInitial}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all lastNameInitial firstNameInitial}}{{lastNameInitial}}.{{firstNameInitial}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all lastNameInitial firstNameInitial}}{{lastNameInitial}}-{{firstNameInitial}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all lastNameInitial firstNameInitial}}{{lastNameInitial}}_{{firstNameInitial}}@{{companyDomain}}{{/if_all}}',
    'ask@{{companyDomain}}',
    'info@{{companyDomain}}',
    'support@{{companyDomain}}',
    'seo@{{companyDomain}}',
    'cto@{{companyDomain}}',
    'seils@{{companyDomain}}',
    'office@{{companyDomain}}'
];

var globalRules = [
    '{{#if_all firstName lastName}}{{firstName}}{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName lastName}}{{firstName}}.{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName lastName}}{{firstName}}-{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName lastName}}{{firstName}}_{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName lastName}}{{lastName}}{{firstName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName lastName}}{{lastName}}.{{firstName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName lastName}}{{lastName}}-{{firstName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName lastName}}{{lastName}}_{{firstName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName middleName lastName}}{{firstName}}{{middleName}}{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName middleName lastName}}{{firstName}}.{{middleName}}.{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName middleName lastName}}{{firstName}}-{{middleName}}-{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName middleName lastName}}{{firstName}}_{{middleName}}_{{lastName}}@{{companyDomain}}{{/if_all}}',
];

var simpleRules = [
    '{{#if firstName}}{{firstName}}@{{companyDomain}}{{/if}}',
    '{{#if_all firstNameInitial lastName}}{{firstNameInitial}}.{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstNameInitial lastName}}{{firstNameInitial}}{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName lastName}}{{firstName}}{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all firstName lastName}}{{firstName}}.{{lastName}}@{{companyDomain}}{{/if_all}}',
    '{{#if_all lastNameInitial firstName}}{{firstName}}{{lastNameInitial}}@{{companyDomain}}{{/if_all}}',
];

var globalTemplates = [],
    localTemplates = [],
    simpleTemplates = [];

for (let i = 0; i < globalRules.length; i++) {
    var globalTemplate = handlebars.compile(globalRules[i]);
    globalTemplates.push(globalTemplate);
}

for (let i = 0; i < localRules.length; i++) {
    var localTemplate = handlebars.compile(localRules[i]);
    localTemplates.push(localTemplate);
}

for (let i = 0; i < simpleRules.length; i++) {
    var simpleTemplate = handlebars.compile(simpleRules[i]);
    simpleTemplates.push(simpleTemplate);
}

module.exports = {
    build: function (firstName, lastName, middleName, companyDomain, isSimple) {
        var mailingList = [],
            domain = [],
            arguments = {},
            templates = [],
            commonDomains = [
                'gmail.com',
                'yahoo.com',
                //'hotmail.com'
            ];

        if (!firstName && !lastName && !middleName && !companyDomain) {
            return mailingList;
        }
        if (firstName) {
            arguments.firstName = firstName;
            arguments.firstNameInitial = firstName.substring(0, 1);
        }
        if (lastName) {
            arguments.lastName = lastName;
            arguments.lastNameInitial = lastName.substring(0, 1);
        }
        if (middleName) {
            arguments.middleName = middleName;
            arguments.middleNameInitial = middleName.substring(0, 1);
        }

        if (isSimple) {
            domain = commonDomains;
            if (companyDomain) {
                domain.push(companyDomain);
            }
            templates = simpleTemplates;
        } else if (companyDomain) {
            domain.push(companyDomain);
            templates = localTemplates;
        }
        else {
            domain = commonDomains;
            templates = globalTemplates;
        }

        for (let i = 0; i < domain.length; i++) {
            arguments.companyDomain = domain[i];
            for (let i = 0; i < templates.length; i++) {
                let template = templates[i];
                let result = template(arguments);
                if (result) {
                    result = result.toLowerCase();
                    mailingList.push(result);
                }
            }
        }
        return mailingList;
    }
};
