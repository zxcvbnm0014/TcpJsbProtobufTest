/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.logon = (function() {

    /**
     * Namespace logon.
     * @exports logon
     * @namespace
     */
    var logon = {};

    /**
     * main enum.
     * @name logon.main
     * @enum {string}
     * @property {number} kMCNull=0 kMCNull value
     * @property {number} kLogon=1 kLogon value
     * @property {number} kProto=2 kProto value
     */
    logon.main = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kMCNull"] = 0;
        values[valuesById[1] = "kLogon"] = 1;
        values[valuesById[2] = "kProto"] = 2;
        return values;
    })();

    /**
     * sub enum.
     * @name logon.sub
     * @enum {string}
     * @property {number} kSCNull=0 kSCNull value
     * @property {number} kLogonReq=1001 kLogonReq value
     * @property {number} kLogonRes=1002 kLogonRes value
     * @property {number} kBytesReq=2001 kBytesReq value
     * @property {number} kBytesRes=2002 kBytesRes value
     * @property {number} kRepeatReq=2003 kRepeatReq value
     * @property {number} kRepeatRes=2004 kRepeatRes value
     */
    logon.sub = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kSCNull"] = 0;
        values[valuesById[1001] = "kLogonReq"] = 1001;
        values[valuesById[1002] = "kLogonRes"] = 1002;
        values[valuesById[2001] = "kBytesReq"] = 2001;
        values[valuesById[2002] = "kBytesRes"] = 2002;
        values[valuesById[2003] = "kRepeatReq"] = 2003;
        values[valuesById[2004] = "kRepeatRes"] = 2004;
        return values;
    })();

    logon.LogonTest = (function() {

        /**
         * Properties of a LogonTest.
         * @memberof logon
         * @interface ILogonTest
         * @property {number|null} [id] LogonTest id
         * @property {string|null} [name] LogonTest name
         */

        /**
         * Constructs a new LogonTest.
         * @memberof logon
         * @classdesc Represents a LogonTest.
         * @implements ILogonTest
         * @constructor
         * @param {logon.ILogonTest=} [properties] Properties to set
         */
        function LogonTest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LogonTest id.
         * @member {number} id
         * @memberof logon.LogonTest
         * @instance
         */
        LogonTest.prototype.id = 0;

        /**
         * LogonTest name.
         * @member {string} name
         * @memberof logon.LogonTest
         * @instance
         */
        LogonTest.prototype.name = "";

        /**
         * Creates a new LogonTest instance using the specified properties.
         * @function create
         * @memberof logon.LogonTest
         * @static
         * @param {logon.ILogonTest=} [properties] Properties to set
         * @returns {logon.LogonTest} LogonTest instance
         */
        LogonTest.create = function create(properties) {
            return new LogonTest(properties);
        };

        /**
         * Encodes the specified LogonTest message. Does not implicitly {@link logon.LogonTest.verify|verify} messages.
         * @function encode
         * @memberof logon.LogonTest
         * @static
         * @param {logon.ILogonTest} message LogonTest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogonTest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified LogonTest message, length delimited. Does not implicitly {@link logon.LogonTest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logon.LogonTest
         * @static
         * @param {logon.ILogonTest} message LogonTest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogonTest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LogonTest message from the specified reader or buffer.
         * @function decode
         * @memberof logon.LogonTest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logon.LogonTest} LogonTest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogonTest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logon.LogonTest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LogonTest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logon.LogonTest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logon.LogonTest} LogonTest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogonTest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LogonTest message.
         * @function verify
         * @memberof logon.LogonTest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LogonTest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a LogonTest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logon.LogonTest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logon.LogonTest} LogonTest
         */
        LogonTest.fromObject = function fromObject(object) {
            if (object instanceof $root.logon.LogonTest)
                return object;
            var message = new $root.logon.LogonTest();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a LogonTest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logon.LogonTest
         * @static
         * @param {logon.LogonTest} message LogonTest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LogonTest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this LogonTest to JSON.
         * @function toJSON
         * @memberof logon.LogonTest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LogonTest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LogonTest;
    })();

    logon.BytesTest = (function() {

        /**
         * Properties of a BytesTest.
         * @memberof logon
         * @interface IBytesTest
         * @property {number|null} [id] BytesTest id
         * @property {Uint8Array|null} [buf] BytesTest buf
         */

        /**
         * Constructs a new BytesTest.
         * @memberof logon
         * @classdesc Represents a BytesTest.
         * @implements IBytesTest
         * @constructor
         * @param {logon.IBytesTest=} [properties] Properties to set
         */
        function BytesTest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BytesTest id.
         * @member {number} id
         * @memberof logon.BytesTest
         * @instance
         */
        BytesTest.prototype.id = 0;

        /**
         * BytesTest buf.
         * @member {Uint8Array} buf
         * @memberof logon.BytesTest
         * @instance
         */
        BytesTest.prototype.buf = $util.newBuffer([]);

        /**
         * Creates a new BytesTest instance using the specified properties.
         * @function create
         * @memberof logon.BytesTest
         * @static
         * @param {logon.IBytesTest=} [properties] Properties to set
         * @returns {logon.BytesTest} BytesTest instance
         */
        BytesTest.create = function create(properties) {
            return new BytesTest(properties);
        };

        /**
         * Encodes the specified BytesTest message. Does not implicitly {@link logon.BytesTest.verify|verify} messages.
         * @function encode
         * @memberof logon.BytesTest
         * @static
         * @param {logon.IBytesTest} message BytesTest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BytesTest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.buf != null && message.hasOwnProperty("buf"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.buf);
            return writer;
        };

        /**
         * Encodes the specified BytesTest message, length delimited. Does not implicitly {@link logon.BytesTest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logon.BytesTest
         * @static
         * @param {logon.IBytesTest} message BytesTest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BytesTest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BytesTest message from the specified reader or buffer.
         * @function decode
         * @memberof logon.BytesTest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logon.BytesTest} BytesTest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BytesTest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logon.BytesTest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.buf = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BytesTest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logon.BytesTest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logon.BytesTest} BytesTest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BytesTest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BytesTest message.
         * @function verify
         * @memberof logon.BytesTest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BytesTest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.buf != null && message.hasOwnProperty("buf"))
                if (!(message.buf && typeof message.buf.length === "number" || $util.isString(message.buf)))
                    return "buf: buffer expected";
            return null;
        };

        /**
         * Creates a BytesTest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logon.BytesTest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logon.BytesTest} BytesTest
         */
        BytesTest.fromObject = function fromObject(object) {
            if (object instanceof $root.logon.BytesTest)
                return object;
            var message = new $root.logon.BytesTest();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.buf != null)
                if (typeof object.buf === "string")
                    $util.base64.decode(object.buf, message.buf = $util.newBuffer($util.base64.length(object.buf)), 0);
                else if (object.buf.length)
                    message.buf = object.buf;
            return message;
        };

        /**
         * Creates a plain object from a BytesTest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logon.BytesTest
         * @static
         * @param {logon.BytesTest} message BytesTest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BytesTest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.buf = options.bytes === String ? "" : [];
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.buf != null && message.hasOwnProperty("buf"))
                object.buf = options.bytes === String ? $util.base64.encode(message.buf, 0, message.buf.length) : options.bytes === Array ? Array.prototype.slice.call(message.buf) : message.buf;
            return object;
        };

        /**
         * Converts this BytesTest to JSON.
         * @function toJSON
         * @memberof logon.BytesTest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BytesTest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BytesTest;
    })();

    logon.RepeatItem = (function() {

        /**
         * Properties of a RepeatItem.
         * @memberof logon
         * @interface IRepeatItem
         * @property {number|null} [id] RepeatItem id
         * @property {string|null} [text] RepeatItem text
         */

        /**
         * Constructs a new RepeatItem.
         * @memberof logon
         * @classdesc Represents a RepeatItem.
         * @implements IRepeatItem
         * @constructor
         * @param {logon.IRepeatItem=} [properties] Properties to set
         */
        function RepeatItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RepeatItem id.
         * @member {number} id
         * @memberof logon.RepeatItem
         * @instance
         */
        RepeatItem.prototype.id = 0;

        /**
         * RepeatItem text.
         * @member {string} text
         * @memberof logon.RepeatItem
         * @instance
         */
        RepeatItem.prototype.text = "";

        /**
         * Creates a new RepeatItem instance using the specified properties.
         * @function create
         * @memberof logon.RepeatItem
         * @static
         * @param {logon.IRepeatItem=} [properties] Properties to set
         * @returns {logon.RepeatItem} RepeatItem instance
         */
        RepeatItem.create = function create(properties) {
            return new RepeatItem(properties);
        };

        /**
         * Encodes the specified RepeatItem message. Does not implicitly {@link logon.RepeatItem.verify|verify} messages.
         * @function encode
         * @memberof logon.RepeatItem
         * @static
         * @param {logon.IRepeatItem} message RepeatItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RepeatItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.text != null && message.hasOwnProperty("text"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
            return writer;
        };

        /**
         * Encodes the specified RepeatItem message, length delimited. Does not implicitly {@link logon.RepeatItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logon.RepeatItem
         * @static
         * @param {logon.IRepeatItem} message RepeatItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RepeatItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RepeatItem message from the specified reader or buffer.
         * @function decode
         * @memberof logon.RepeatItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logon.RepeatItem} RepeatItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RepeatItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logon.RepeatItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RepeatItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logon.RepeatItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logon.RepeatItem} RepeatItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RepeatItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RepeatItem message.
         * @function verify
         * @memberof logon.RepeatItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RepeatItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            return null;
        };

        /**
         * Creates a RepeatItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logon.RepeatItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logon.RepeatItem} RepeatItem
         */
        RepeatItem.fromObject = function fromObject(object) {
            if (object instanceof $root.logon.RepeatItem)
                return object;
            var message = new $root.logon.RepeatItem();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.text != null)
                message.text = String(object.text);
            return message;
        };

        /**
         * Creates a plain object from a RepeatItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logon.RepeatItem
         * @static
         * @param {logon.RepeatItem} message RepeatItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RepeatItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.text = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            return object;
        };

        /**
         * Converts this RepeatItem to JSON.
         * @function toJSON
         * @memberof logon.RepeatItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RepeatItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RepeatItem;
    })();

    logon.RepeatTest = (function() {

        /**
         * Properties of a RepeatTest.
         * @memberof logon
         * @interface IRepeatTest
         * @property {Array.<logon.IRepeatItem>|null} [items] RepeatTest items
         */

        /**
         * Constructs a new RepeatTest.
         * @memberof logon
         * @classdesc Represents a RepeatTest.
         * @implements IRepeatTest
         * @constructor
         * @param {logon.IRepeatTest=} [properties] Properties to set
         */
        function RepeatTest(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RepeatTest items.
         * @member {Array.<logon.IRepeatItem>} items
         * @memberof logon.RepeatTest
         * @instance
         */
        RepeatTest.prototype.items = $util.emptyArray;

        /**
         * Creates a new RepeatTest instance using the specified properties.
         * @function create
         * @memberof logon.RepeatTest
         * @static
         * @param {logon.IRepeatTest=} [properties] Properties to set
         * @returns {logon.RepeatTest} RepeatTest instance
         */
        RepeatTest.create = function create(properties) {
            return new RepeatTest(properties);
        };

        /**
         * Encodes the specified RepeatTest message. Does not implicitly {@link logon.RepeatTest.verify|verify} messages.
         * @function encode
         * @memberof logon.RepeatTest
         * @static
         * @param {logon.IRepeatTest} message RepeatTest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RepeatTest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.logon.RepeatItem.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RepeatTest message, length delimited. Does not implicitly {@link logon.RepeatTest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logon.RepeatTest
         * @static
         * @param {logon.IRepeatTest} message RepeatTest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RepeatTest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RepeatTest message from the specified reader or buffer.
         * @function decode
         * @memberof logon.RepeatTest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logon.RepeatTest} RepeatTest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RepeatTest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logon.RepeatTest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.logon.RepeatItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RepeatTest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logon.RepeatTest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logon.RepeatTest} RepeatTest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RepeatTest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RepeatTest message.
         * @function verify
         * @memberof logon.RepeatTest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RepeatTest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.logon.RepeatItem.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RepeatTest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logon.RepeatTest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logon.RepeatTest} RepeatTest
         */
        RepeatTest.fromObject = function fromObject(object) {
            if (object instanceof $root.logon.RepeatTest)
                return object;
            var message = new $root.logon.RepeatTest();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".logon.RepeatTest.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".logon.RepeatTest.items: object expected");
                    message.items[i] = $root.logon.RepeatItem.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RepeatTest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logon.RepeatTest
         * @static
         * @param {logon.RepeatTest} message RepeatTest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RepeatTest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.logon.RepeatItem.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this RepeatTest to JSON.
         * @function toJSON
         * @memberof logon.RepeatTest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RepeatTest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RepeatTest;
    })();

    return logon;
})();

module.exports = $root;
