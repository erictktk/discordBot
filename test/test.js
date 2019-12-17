var chai = require('chai'),
expect = chai.expect,
should = chai.should();

import MessageObj from "../bot";
import * as botStuff from "../bot";

describe('Test Everything', function() {
    var permissionList = ['guy', 'guy2'];

    var mainString = '{"Title": "ShitListBot", "SuspectList": ["Gary521", "ChinaGuy1"], "ShitList": [], "ConfirmedList" : ["NiceGuy453"], "options":{"needPermission": true, "pingCooldown:" 60, "lastPing" : {} }'
    var mainObj = JSON.parse(mainString);
    mainObj['options']['permissionList'] = permissionList;

    it ('preliminary tests', function() {
            expect(mainObj).to.have.property("options");
            expect(Object.keys(mainObj['options']).length).equals(2);
            expect(2).equals(2);
            //
    });

    it('actual tests', function() {

        var permissionList = botStuff.getPermissionList(mainString);
        expect(permissionList).equals(permissionList);

        var jsonObject = botStuff.addToPermissionList("noAuthor", "newName", mainString);
        expect(jsonObject['options']['permissionList']).equals(permissionList);
        
        var jsonObject2 = botStuff.addToPermissionList("personperson", "newName2", mainString);
        expect(jsonObject2['options']['permissionList']).equals(['guy', 'guy2', 'newName2']);

        var jsonObject
    

    });

});