(ns app.config)

(def debug?
  ^boolean goog.DEBUG)

(def api-url
  (if debug?
    "http://localhost:3000/api"
    "/api")) 