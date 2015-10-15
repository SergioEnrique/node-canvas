
ADDON = build/Release/canvas.node
REPORTER = dot

$(ADDON): src/*.cc
	npm install

test: $(ADDON)
	@./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--ui exports \
		test/*.test.js

test-server: $(ADDON)
	@node test/server.js

benchmark:
	@node benchmarks/run.js

clean:
	rm -r build/Release/*

.PHONY: test test-server benchmark clean
