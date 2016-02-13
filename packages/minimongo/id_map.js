LocalCollection._IdMap = function () {
  var self = this;
  IdMap.call(self, MongoID.idStringify, MongoID.idParse);
};

Meteor._inherits(LocalCollection._IdMap, IdMap);


// Immutable id map
LocalCollection._ImmutableIdMap = function () {
    var self = this;
    ImmutableIdMap.call(self, MongoID.idStringify, MongoID.idParse);
};

Meteor._inherits(LocalCollection._ImmutableIdMap, ImmutableIdMap);


