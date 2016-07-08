var handlebars = require('handlebars');
var rules = [
    '{{firstName}}@{{companyDomain}}',
    '{{lastName}}@{{companyDomain}}',
    '{{firstName}}.{{lastName}}@{{companyDomain}}',
    '{{firstName}}-{{lastName}}@{{companyDomain}}',
    '{{firstName}}{{lastName}}@{{companyDomain}}'];
var templates = [];
for (var i = 0; i < rules.length; i++) {
    var template = handlebars.compile(rules[i]);
    templates.push(template);
}
module.exports = {
    build: function (firstName, lastName, companyDomain) {
        var arguments = {};
        if (firstName) {
            arguments.firstName = firstName;
        }
        if (lastName) {
            arguments.lastName = lastName;
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
        return results;
    }
};
