/**
 * Created by achuyan on 06.02.17.
 */
var chai = require('chai');
var sinon = require('sinon');
var expect = chai.expect;
var EmailGenerator = require('../main');

describe('EmailGenerator:', function() {
    describe('"build" method', function() {
        it('should exist', function() {
            expect(EmailGenerator.build).to.exist;
        });
        it('should have type "function"', function() {
            expect(EmailGenerator.build).to.be.a('function');
        });
        it('should return an empty array if got no arguments', function() {
            expect(EmailGenerator.build()).to.be.empty;
        });
        describe('called with companyDomain argument.', function() {
            it('Result array should contain "firstName_lastName@company.com" email address', function() {
                expect(EmailGenerator.build('firstName', 'lastName', undefined, 'company.com')).to.include('firstname_lastname@company.com');
            });
            it('Result array should contain "info@company.com" email address', function() {
                expect(EmailGenerator.build('firstName', 'lastName', undefined, 'company.com')).to.include('info@company.com');
            });
            it('Result array should contain "support@company.com" email address', function() {
                expect(EmailGenerator.build('firstName', 'lastName', undefined, 'company.com')).to.include('support@company.com');
            });
            it('Result array should contain "office@company.com" email address', function() {
                expect(EmailGenerator.build('firstName', 'lastName', undefined, 'company.com')).to.include('office@company.com');
            });
            it('Result array should not contain "office@gmail.com" email address', function() {
                expect(EmailGenerator.build('firstName', 'lastName', undefined, 'company.com')).to.not.include('office@gmail.com');
            });
        });
        describe('called without companyDomain argument.', function() {
            it('Result array should contain "firstName_lastName@gmail.com" email address', function() {
                expect(EmailGenerator.build('firstName', 'lastName')).to.include('firstname_lastname@gmail.com');
            });
            it('Result array should contain "firstname_middlename_lastname@gmail.com" email address', function() {
                console.dir(EmailGenerator.build('firstName', 'lastName', 'middleName'))
                expect(EmailGenerator.build('firstName', 'lastName', 'middleName')).to.include('firstname_middlename_lastname@gmail.com');
            });
            it('Result array should contain "firstName_lastName@gmail.com" email address', function() {
                expect(EmailGenerator.build('firstName', 'lastName')).to.include('firstname_lastname@gmail.com');
            });
            it('Result array should contain "firstName_lastName@gmail.com" email address', function() {
                expect(EmailGenerator.build('firstName', 'lastName')).to.include('firstname_lastname@gmail.com');
            });
        });
    });
});
