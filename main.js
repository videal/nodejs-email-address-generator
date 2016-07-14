var handlebars = require('handlebars');
var rules = [
    '{{firstName}}@{{companyDomain}}',
    '{{lastName}}@{{companyDomain}}',
    '{{firstName}}{{lastName}}@{{companyDomain}}',
    '{{firstName}}.{{lastName}}@{{companyDomain}}',
    '{{firstNameInitial}}{{lastName}}@{{companyDomain}}',
    '{{firstNameInitial}}.{{lastName}}@{{companyDomain}}',
    '{{firstName}}{{lastNameInitial}}@{{companyDomain}}',
    '{{firstName}}.{{lastNameInitial}}@{{companyDomain}}',
    '{{firstNameInitial}}{{lastNameInitial}}@{{companyDomain}}',
    '{{firstNameInitial}}.{{lastNameInitial}}@{{companyDomain}}',
    '{{lastName}}{{firstName}}@{{companyDomain}}',
    '{{lastName}}.{{firstName}}@{{companyDomain}}',
    '{{lastName}}{{firstNameInitial}}@{{companyDomain}}',
    '{{lastName}}.{{firstNameInitial}}@{{companyDomain}}',
    '{{lastNameInitial}}{{firstName}}@{{companyDomain}}',
    '{{lastNameInitial}}.{{firstName}}@{{companyDomain}}',
    '{{lastNameInitial}}{{firstNameInitial}}@{{companyDomain}}',
    '{{lastNameInitial}}.{{firstNameInitial}}@{{companyDomain}}',
    '{{firstNameInitial}}{{middleNameInitial}}{{lastName}}@{{companyDomain}}',
    '{{firstNameInitial}}{{middleNameInitial}}.{{lastName}}@{{companyDomain}}',
    '{{firstName}}{{middleNameInitial}}{{lastName}}@{{companyDomain}}',
    '{{firstName}}.{{middleNameInitial}}.{{lastName}}@{{companyDomain}}',
    '{{firstName}}{{middleName}}{{lastName}}@{{companyDomain}}',
    '{{firstName}}.{{middleName}}.{{lastName}}@{{companyDomain}}',
    '{{firstName}}-{{lastName}}@{{companyDomain}}',
    '{{firstNameInitial}}-{{lastName}}@{{companyDomain}}',
    '{{firstName}}-{{lastNameInitial}}@{{companyDomain}}',
    '{{firstNameInitial}}-{{lastNameInitial}}@{{companyDomain}}',
    '{{lastName}}-{{firstName}}@{{companyDomain}}',
    '{{lastName}}-{{firstNameInitial}}@{{companyDomain}}',
    '{{lastNameInitial}}-{{firstName}}@{{companyDomain}}',
    '{{lastNameInitial}}-{{firstNameInitial}}@{{companyDomain}}',
    '{{firstNameInitial}}{{middleNameInitial}}-{{lastName}}@{{companyDomain}}',
    '{{firstName}}-{{middleNameInitial}}-{{lastName}}@{{companyDomain}}',
    '{{firstName}}-{{middleName}}-{{lastName}}@{{companyDomain}}',
    '{{firstName}}_{{lastName}}@{{companyDomain}}',
    '{{firstNameInitial}}_{{lastName}}@{{companyDomain}}',
    '{{firstName}}_{{lastNameInitial}}@{{companyDomain}}',
    '{{firstNameInitial}}_{{lastNameInitial}}@{{companyDomain}}',
    '{{lastName}}_{{firstName}}@{{companyDomain}}',
    '{{lastName}}_{{firstNameInitial}}@{{companyDomain}}',
    '{{lastNameInitial}}_{{firstName}}@{{companyDomain}}',
    '{{lastNameInitial}}_{{firstNameInitial}}@{{companyDomain}}',
    '{{firstNameInitial}}{{middleNameInitial}}_{{lastName}}@{{companyDomain}}',
    '{{firstName}}_{{middleNameInitial}}_{{lastName}}@{{companyDomain}}',
    '{{firstName}}_{{middleName}}_{{lastName}}@{{companyDomain}}'];
var commonDomains = [
    'gmail.com',
    'yahoo.com',
    'hotmail.com'];
var templates = [];
for (var i = 0; i < rules.length; i++) {
    var template = handlebars.compile(rules[i]);
    templates.push(template);
}
module.exports = {
    build: function (firstName, lastName, middleName, companyDomain) {
        var arguments = {};
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
        if (companyDomain) {
            arguments.companyDomain = companyDomain;
        }
        var results = [];
        for (var i = 0; i < templates.length; i++) {
            var template = templates[i];
            var result = template(arguments);
            result = result.toLowerCase();
            results.push(result);
        }
        if (0 > commonDomains.indexOf(companyDomain)) {
            for (var i = 0; i < commonDomains.length; i++) {
                var commonDomain = commonDomains[i];
                results = results.concat(this.build(firstName, middleName, lastName, commonDomain));
            }
        }
        return results;
    }
};
