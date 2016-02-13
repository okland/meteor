ImmutableIdMap = function (idStringify, idParse) {
    var self = this;
    self._map = Immutable.OrderedMap({});
    self._idStringify = idStringify || JSON.stringify;
    self._idParse = idParse || JSON.parse;
};

// Some of these methods are designed to match methods on OrderedDict, since
// (eg) ObserveMultiplex and _CachingChangeObserver use them interchangeably.
// (Conceivably, this should be replaced with "UnorderedDict" with a specific
// set of methods that overlap between the two.)

_.extend(ImmutableIdMap.prototype, {
    get: function (id) {
        var self = this;
        var key = self._idStringify(id);
        return self._map.get(key);
    },
    set: function (id, value) {
        var self = this;
        var key = self._idStringify(id);
        self._map = self._map.set(key, value);
    },
    remove: function (id) {
        var self = this;
        var key = self._idStringify(id);
        self._map = self._map.remove(key);
    },
    has: function (id) {
        var self = this;
        var key = self._idStringify(id);
        return self._map.has(key);
    },
    empty: function () {
        var self = this;
        return self._map.size === 0;
    },
    clear: function () {
        var self = this;
        self._map = self._map.clear();
    },
    // Iterates over the items in the map. Return `false` to break the loop.
    forEach: function (iterator) {
        var self = this;
        this._map.forEach(function (value, key) {
            return iterator.call(null, value,
                self._idParse(key));
        });
    },
    size: function () {
        var self = this;
        return self._map.size;
    },
    setDefault: function (id, def) {
        var self = this;
        var key = self._idStringify(id);
        if (self._map.has(key))
            return self._map.get(key);
        self._map = self._map.set(key, def);
        return def;
    },
    // Because we are immutable no need to clone.
    clone: function () {
        var self = this;
        var clone = new ImmutableIdMap(self._idStringify, self._idParse);
        // Use same map in cloned value
        clone._map = self._map;
        return clone;
    }
});

