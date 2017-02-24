/**
 * Created by achuyan on 06.02.17.
 */
var chai = require('chai');
var sinon = require('sinon');
var expect = chai.expect;
var EmailGenerator = require('../main');
describe('EmailGenerator:', function () {
    describe('build method: generates a list of possible user\'s email address.', function () {
        it('should exist', function () {
            expect(EmailGenerator.build).to.exist;
        });
        it('should have type "function"', function () {
            expect(EmailGenerator.build).to.be.a('function');
        });
        it('should return an empty array if method got no arguments', function () {
            expect(EmailGenerator.build()).to.be.empty;
        });
        describe('called with companyDomain argument.', function () {
            it('result array should contain "firstname_lastname@company.com" email address', function () {
                expect(EmailGenerator.build('firstName', 'lastName', undefined, 'company.com')).to.include('firstname_lastname@company.com');
            });
            it('result array should contain "info@company.com" email address', function () {
                expect(EmailGenerator.build('firstName', 'lastName', undefined, 'company.com')).to.include('info@company.com');
            });
            it('result array should contain "support@company.com" email address', function () {
                expect(EmailGenerator.build('firstName', 'lastName', undefined, 'company.com')).to.include('support@company.com');
            });
            it('result array should contain "office@company.com" email address', function () {
                expect(EmailGenerator.build('firstName', 'lastName', undefined, 'company.com')).to.include('office@company.com');
            });
            it('result array should not contain "office@gmail.com" email address', function () {
                expect(EmailGenerator.build('firstName', 'lastName', undefined, 'company.com')).to.not.include('office@gmail.com');
            });
        });
        describe('called without companyDomain argument.', function () {
            it('result array should contain "firstname_lastname@gmail.com" email address', function () {
                expect(EmailGenerator.build('firstName', 'lastName')).to.include('firstname_lastname@gmail.com');
            });
            it('result array should contain "firstname_middlename_lastname@gmail.com" email address', function () {
                expect(EmailGenerator.build('firstName', 'lastName', 'middleName')).to.include('firstname_middlename_lastname@gmail.com');
            });
            it('result array should contain "firstname_lastname@gmail.com" email address', function () {
                expect(EmailGenerator.build('firstName', 'lastName')).to.include('firstname_lastname@gmail.com');
            });
            it('result array should contain "firstname_lastname@gmail.com" email address', function () {
                expect(EmailGenerator.build('firstName', 'lastName')).to.include('firstname_lastname@gmail.com');
            });
            it('result array should not contain "office@company.com" email address', function () {
                expect(EmailGenerator.build('firstName', 'lastName')).to.not.include('office@company.com');
            });
            it('result array should not contain "firstname.lastname@company.com" email address', function () {
                expect(EmailGenerator.build('firstName', 'lastName')).to.not.include('firstName.lastName@company.com');
            });
        });
    });
});
