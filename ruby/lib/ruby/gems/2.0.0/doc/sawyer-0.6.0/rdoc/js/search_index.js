var search_data = {"index":{"searchIndex":["sawyer","agent","error","linkparsers","hal","simple","relation","map","resource","response","serializer","<<()","[]()","[]()","[]=()","allow_undefined_methods?()","any_json()","attr_accessor()","call()","call()","decode()","decode()","decode_body()","decode_hash()","decode_hash_value()","decode_object()","delete()","dump()","each()","encode()","encode()","encode_body()","encode_hash()","encode_object()","expand_url()","from_link()","from_links()","get()","head()","href()","inspect()","inspect()","inspect()","inspect()","inspect()","json()","key?()","keys()","load()","marshal_dump()","marshal_dump()","marshal_load()","marshal_load()","message_pack()","method_missing()","multi_json()","new()","new()","new()","new()","new()","new()","options()","parse()","parse()","parse_links()","patch()","post()","process_data()","process_rels()","process_value()","put()","rels()","root()","serializer()","size()","start()","time()","time_field?()","timing()","to_attrs()","to_h()","to_hash()","to_yaml_properties()","to_yaml_properties()","yajl()"],"longSearchIndex":["sawyer","sawyer::agent","sawyer::error","sawyer::linkparsers","sawyer::linkparsers::hal","sawyer::linkparsers::simple","sawyer::relation","sawyer::relation::map","sawyer::resource","sawyer::response","sawyer::serializer","sawyer::relation::map#<<()","sawyer::relation::map#[]()","sawyer::resource#[]()","sawyer::resource#[]=()","sawyer::agent#allow_undefined_methods?()","sawyer::serializer::any_json()","sawyer::resource::attr_accessor()","sawyer::agent#call()","sawyer::relation#call()","sawyer::agent::decode()","sawyer::serializer#decode()","sawyer::agent#decode_body()","sawyer::serializer#decode_hash()","sawyer::serializer#decode_hash_value()","sawyer::serializer#decode_object()","sawyer::relation#delete()","sawyer::serializer#dump()","sawyer::resource#each()","sawyer::agent::encode()","sawyer::serializer#encode()","sawyer::agent#encode_body()","sawyer::serializer#encode_hash()","sawyer::serializer#encode_object()","sawyer::agent#expand_url()","sawyer::relation::from_link()","sawyer::relation::from_links()","sawyer::relation#get()","sawyer::relation#head()","sawyer::relation#href()","sawyer::agent#inspect()","sawyer::relation#inspect()","sawyer::relation::map#inspect()","sawyer::resource#inspect()","sawyer::response#inspect()","sawyer::serializer::json()","sawyer::resource#key?()","sawyer::relation::map#keys()","sawyer::serializer#load()","sawyer::agent#marshal_dump()","sawyer::resource#marshal_dump()","sawyer::agent#marshal_load()","sawyer::resource#marshal_load()","sawyer::serializer::message_pack()","sawyer::resource#method_missing()","sawyer::serializer::multi_json()","sawyer::agent::new()","sawyer::relation::new()","sawyer::relation::map::new()","sawyer::resource::new()","sawyer::response::new()","sawyer::serializer::new()","sawyer::relation#options()","sawyer::linkparsers::hal#parse()","sawyer::linkparsers::simple#parse()","sawyer::agent#parse_links()","sawyer::relation#patch()","sawyer::relation#post()","sawyer::response#process_data()","sawyer::response#process_rels()","sawyer::resource#process_value()","sawyer::relation#put()","sawyer::agent#rels()","sawyer::agent#root()","sawyer::agent::serializer()","sawyer::relation::map#size()","sawyer::agent#start()","sawyer::response#time()","sawyer::serializer#time_field?()","sawyer::response#timing()","sawyer::resource#to_attrs()","sawyer::relation::map#to_h()","sawyer::relation::map#to_hash()","sawyer::agent#to_yaml_properties()","sawyer::resource#to_yaml_properties()","sawyer::serializer::yajl()"],"info":[["Sawyer","","Sawyer.html","",""],["Sawyer::Agent","","Sawyer/Agent.html","",""],["Sawyer::Error","","Sawyer/Error.html","",""],["Sawyer::LinkParsers","","Sawyer/LinkParsers.html","",""],["Sawyer::LinkParsers::Hal","","Sawyer/LinkParsers/Hal.html","",""],["Sawyer::LinkParsers::Simple","","Sawyer/LinkParsers/Simple.html","",""],["Sawyer::Relation","","Sawyer/Relation.html","",""],["Sawyer::Relation::Map","","Sawyer/Relation/Map.html","",""],["Sawyer::Resource","","Sawyer/Resource.html","",""],["Sawyer::Response","","Sawyer/Response.html","",""],["Sawyer::Serializer","","Sawyer/Serializer.html","",""],["<<","Sawyer::Relation::Map","Sawyer/Relation/Map.html#method-i-3C-3C","(rel)","<p>Adds a Relation to the map.\n<p>rel - A Relation.\n<p>Returns nothing.\n"],["[]","Sawyer::Relation::Map","Sawyer/Relation/Map.html#method-i-5B-5D","(key)","<p>Gets the raw Relation by its name.\n<p>key - The Symbol name of the Relation.\n<p>Returns a Relation.\n"],["[]","Sawyer::Resource","Sawyer/Resource.html#method-i-5B-5D","(method)","<p>Allow fields to be retrieved via Hash notation\n<p>method - key name\n<p>Returns the value from attrs if exists …\n"],["[]=","Sawyer::Resource","Sawyer/Resource.html#method-i-5B-5D-3D","(method, value)","<p>Allow fields to be set via Hash notation\n<p>method - key name value - value to set for the attr key\n<p>Returns …\n"],["allow_undefined_methods?","Sawyer::Agent","Sawyer/Agent.html#method-i-allow_undefined_methods-3F","()",""],["any_json","Sawyer::Serializer","Sawyer/Serializer.html#method-c-any_json","()",""],["attr_accessor","Sawyer::Resource","Sawyer/Resource.html#method-c-attr_accessor","(*attrs)","<p>Wire up accessor methods to pull from attrs\n"],["call","Sawyer::Agent","Sawyer/Agent.html#method-i-call","(method, url, data = nil, options = nil)","<p>Makes a request through Faraday.\n<p>method  - The Symbol name of an HTTP method. url     - The String URL …\n"],["call","Sawyer::Relation","Sawyer/Relation.html#method-i-call","(data = nil, options = nil)","<p>Public: Makes an API request with the curent Relation.\n<p>data    - The Optional Hash or Resource body to …\n"],["decode","Sawyer::Agent","Sawyer/Agent.html#method-c-decode","(data)",""],["decode","Sawyer::Serializer","Sawyer/Serializer.html#method-i-decode","(data)","<p>Public: Decodes a String into an Object (usually a Hash or Array of\nHashes).\n<p>data - An encoded String …\n"],["decode_body","Sawyer::Agent","Sawyer/Agent.html#method-i-decode_body","(str)","<p>Decodes a String response body to a resource.\n<p>str - The String body from the response.\n<p>Returns an Object …\n"],["decode_hash","Sawyer::Serializer","Sawyer/Serializer.html#method-i-decode_hash","(hash)",""],["decode_hash_value","Sawyer::Serializer","Sawyer/Serializer.html#method-i-decode_hash_value","(key, value)",""],["decode_object","Sawyer::Serializer","Sawyer/Serializer.html#method-i-decode_object","(data)",""],["delete","Sawyer::Relation","Sawyer/Relation.html#method-i-delete","(data = nil, options = nil)","<p>Public: Makes an API request with the curent Relation using DELETE.\n<p>data    - The Optional Hash or Resource …\n"],["dump","Sawyer::Serializer","Sawyer/Serializer.html#method-i-dump","(data)",""],["each","Sawyer::Resource","Sawyer/Resource.html#method-i-each","(&block)",""],["encode","Sawyer::Agent","Sawyer/Agent.html#method-c-encode","(data)",""],["encode","Sawyer::Serializer","Sawyer/Serializer.html#method-i-encode","(data)","<p>Public: Encodes an Object (usually a Hash or Array of Hashes).\n<p>data - Object to be encoded.\n<p>Returns an …\n"],["encode_body","Sawyer::Agent","Sawyer/Agent.html#method-i-encode_body","(data)","<p>Encodes an object to a string for the API request.\n<p>data - The Hash or Resource that is being sent.\n<p>Returns …\n"],["encode_hash","Sawyer::Serializer","Sawyer/Serializer.html#method-i-encode_hash","(hash)",""],["encode_object","Sawyer::Serializer","Sawyer/Serializer.html#method-i-encode_object","(data)",""],["expand_url","Sawyer::Agent","Sawyer/Agent.html#method-i-expand_url","(url, options = nil)",""],["from_link","Sawyer::Relation","Sawyer/Relation.html#method-c-from_link","(agent, name, options)","<p>Public: Builds a single Relation from the given options.  These are usually\ntaken from a `_links` property …\n"],["from_links","Sawyer::Relation","Sawyer/Relation.html#method-c-from_links","(agent, index, rels = Map.new)","<p>Public: Builds an index of Relations from the value of a `_links` property\nin a resource.  :get is the …\n"],["get","Sawyer::Relation","Sawyer/Relation.html#method-i-get","(options = nil)","<p>Public: Makes an API request with the curent Relation using GET.\n<p>data    - The Optional Hash or Resource …\n"],["head","Sawyer::Relation","Sawyer/Relation.html#method-i-head","(options = nil)","<p>Public: Makes an API request with the curent Relation using HEAD.\n<p>data    - The Optional Hash or Resource …\n"],["href","Sawyer::Relation","Sawyer/Relation.html#method-i-href","(options = nil)",""],["inspect","Sawyer::Agent","Sawyer/Agent.html#method-i-inspect","()",""],["inspect","Sawyer::Relation","Sawyer/Relation.html#method-i-inspect","()",""],["inspect","Sawyer::Relation::Map","Sawyer/Relation/Map.html#method-i-inspect","()",""],["inspect","Sawyer::Resource","Sawyer/Resource.html#method-i-inspect","()",""],["inspect","Sawyer::Response","Sawyer/Response.html#method-i-inspect","()",""],["json","Sawyer::Serializer","Sawyer/Serializer.html#method-c-json","()",""],["key?","Sawyer::Resource","Sawyer/Resource.html#method-i-key-3F","(key)","<p>Checks to see if the given key is in this resource.\n<p>key - A Symbol key.\n<p>Returns true if the key exists, …\n"],["keys","Sawyer::Relation::Map","Sawyer/Relation/Map.html#method-i-keys","()","<p>Gets a list of the Relation names.\n<p>Returns an Array of Symbols in no specific order.\n"],["load","Sawyer::Serializer","Sawyer/Serializer.html#method-i-load","(data)",""],["marshal_dump","Sawyer::Agent","Sawyer/Agent.html#method-i-marshal_dump","()",""],["marshal_dump","Sawyer::Resource","Sawyer/Resource.html#method-i-marshal_dump","()",""],["marshal_load","Sawyer::Agent","Sawyer/Agent.html#method-i-marshal_load","(dumped)",""],["marshal_load","Sawyer::Resource","Sawyer/Resource.html#method-i-marshal_load","(dumped)",""],["message_pack","Sawyer::Serializer","Sawyer/Serializer.html#method-c-message_pack","()",""],["method_missing","Sawyer::Resource","Sawyer/Resource.html#method-i-method_missing","(method, *args)","<p>Provides access to a resource&#39;s attributes.\n"],["multi_json","Sawyer::Serializer","Sawyer/Serializer.html#method-c-multi_json","()",""],["new","Sawyer::Agent","Sawyer/Agent.html#method-c-new","(endpoint, options = nil)","<p>Agents handle making the requests, and passing responses to\nSawyer::Response.\n<p>endpoint - String URI of …\n"],["new","Sawyer::Relation","Sawyer/Relation.html#method-c-new","(agent, name, href, method = nil)","<p>A Relation represents an available next action for a resource.\n<p>agent  - The Sawyer::Agent that made the …\n"],["new","Sawyer::Relation::Map","Sawyer/Relation/Map.html#method-c-new","()","<p>Tracks the available next actions for a resource, and issues requests for\nthem.\n"],["new","Sawyer::Resource","Sawyer/Resource.html#method-c-new","(agent, data = {})","<p>Initializes a Resource with the given data.\n<p>agent - The Sawyer::Agent that made the API request. data …\n"],["new","Sawyer::Response","Sawyer/Response.html#method-c-new","(agent, res, options = {})","<p>Builds a Response after a completed request.\n<p>agent - The Sawyer::Agent that is managing the API connection. …\n"],["new","Sawyer::Serializer","Sawyer/Serializer.html#method-c-new","(format, dump_method_name = nil, load_method_name = nil)","<p>Public: Wraps a serialization format for Sawyer.  Nested objects are\nprepared for serialization (such …\n"],["options","Sawyer::Relation","Sawyer/Relation.html#method-i-options","(data = nil, opt = nil)","<p>Public: Makes an API request with the curent Relation using OPTIONS.\n<p>data    - The Optional Hash or Resource …\n"],["parse","Sawyer::LinkParsers::Hal","Sawyer/LinkParsers/Hal.html#method-i-parse","(data)",""],["parse","Sawyer::LinkParsers::Simple","Sawyer/LinkParsers/Simple.html#method-i-parse","(data)","<p>Public: Parses simple *_url style links on resources\n<p>data   - Hash of resource data\n<p>Returns a Hash of data …\n"],["parse_links","Sawyer::Agent","Sawyer/Agent.html#method-i-parse_links","(data)",""],["patch","Sawyer::Relation","Sawyer/Relation.html#method-i-patch","(data = nil, options = nil)","<p>Public: Makes an API request with the curent Relation using PATCH.\n<p>data    - The Optional Hash or Resource …\n"],["post","Sawyer::Relation","Sawyer/Relation.html#method-i-post","(data = nil, options = nil)","<p>Public: Makes an API request with the curent Relation using POST.\n<p>data    - The Optional Hash or Resource …\n"],["process_data","Sawyer::Response","Sawyer/Response.html#method-i-process_data","(data)","<p>Turns parsed contents from an API response into a Resource or collection of\nResources.\n<p>data - Either an …\n"],["process_rels","Sawyer::Response","Sawyer/Response.html#method-i-process_rels","()","<p>Finds link relations from &#39;Link&#39; response header\n<p>Returns an array of Relations\n"],["process_value","Sawyer::Resource","Sawyer/Resource.html#method-i-process_value","(value)","<p>Processes an individual value of this resource.  Hashes get exploded into\nanother Resource, and Arrays …\n"],["put","Sawyer::Relation","Sawyer/Relation.html#method-i-put","(data = nil, options = nil)","<p>Public: Makes an API request with the curent Relation using PUT.\n<p>data    - The Optional Hash or Resource …\n"],["rels","Sawyer::Agent","Sawyer/Agent.html#method-i-rels","()","<p>Public: Retains a reference to the root relations of the API.\n<p>Returns a Sawyer::Relation::Map.\n"],["root","Sawyer::Agent","Sawyer/Agent.html#method-i-root","()","<p>Public: Retains a reference to the root response of the API.\n<p>Returns a Sawyer::Response.\n"],["serializer","Sawyer::Agent","Sawyer/Agent.html#method-c-serializer","()",""],["size","Sawyer::Relation::Map","Sawyer/Relation/Map.html#method-i-size","()","<p>Gets the number of mapped Relations.\n<p>Returns an Integer.\n"],["start","Sawyer::Agent","Sawyer/Agent.html#method-i-start","()","<p>Public: Hits the root of the API to get the initial actions.\n<p>Returns a Sawyer::Response.\n"],["time","Sawyer::Response","Sawyer/Response.html#method-i-time","()",""],["time_field?","Sawyer::Serializer","Sawyer/Serializer.html#method-i-time_field-3F","(key, value)",""],["timing","Sawyer::Response","Sawyer/Response.html#method-i-timing","()",""],["to_attrs","Sawyer::Resource","Sawyer/Resource.html#method-i-to_attrs","()",""],["to_h","Sawyer::Relation::Map","Sawyer/Relation/Map.html#method-i-to_h","()",""],["to_hash","Sawyer::Relation::Map","Sawyer/Relation/Map.html#method-i-to_hash","()",""],["to_yaml_properties","Sawyer::Agent","Sawyer/Agent.html#method-i-to_yaml_properties","()","<p>private\n"],["to_yaml_properties","Sawyer::Resource","Sawyer/Resource.html#method-i-to_yaml_properties","()","<p>private\n"],["yajl","Sawyer::Serializer","Sawyer/Serializer.html#method-c-yajl","()",""]]}}