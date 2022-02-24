var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user1 = {
    name: "satti",
    logFriend: function (friend) {
        throw new Error("Function not implemented.");
    }
};
var gType = {
    version: 1,
    data: user1
};
var gType2 = {
    version: 1,
    data: "satti-data"
};
var result = addId(user1);
console.log(result);
