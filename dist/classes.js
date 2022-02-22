var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Fighter = /** @class */ (function () {
    function Fighter(firstName, lastName, baseMartialArt, fightAttitude) {
        var _this = this;
        if (baseMartialArt === void 0) { baseMartialArt = 'MMA'; }
        this.getFullName = function () {
            return _this.firstName + _this.lastName;
        };
        this.firstName = firstName;
        this.lastName = lastName;
        this.baseMartialArt = baseMartialArt;
        this.fightAttitude = fightAttitude;
    }
    Fighter.occupation = 'Prize Fighting';
    return Fighter;
}());
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(dojoName, firstName, lastName, baseMartialArt, fightAttitude) {
        if (baseMartialArt === void 0) { baseMartialArt = 'MMA'; }
        var _this = _super.call(this, firstName, lastName, baseMartialArt, fightAttitude) || this;
        _this.getDojoName = function () {
            return _this.dojoName;
        };
        _this.setDojoName = function (dojoName) {
            _this.dojoName = dojoName;
        };
        _this.dojoName = dojoName;
        return _this;
    }
    Trainer.prototype.getFightAttitude = function () {
        return this.fightAttitude;
    };
    return Trainer;
}(Fighter));
var satti = new Fighter('Satti', 'Reddy', 'Samurai', 'hyper-agressive');
var subbi = new Trainer('blackArea', 'Subbi', 'reddy', 'MMA', 'stressed');
console.log(Fighter.occupation);
console.log(subbi.getFightAttitude());
console.log(subbi.getDojoName());
