<div align="center">

<h1>✨<a href="https://github.com/hypermodules">hypermodules</a>✨</h1>
<p>A hypermodular development collective</p>

<h2><a href="https://github.com/hypermodules/hyperamp">Hyperamp</a></h2>
<p>Hyperamp is a humble music player built with web technologies. (<a href="http://electron.atom.io">electron</a> + <a href="https://choo.io">choo</a>)</p>
<img src="/static/hyperamp-1x.png" srcset="/static/hyperamp-2x.png 2x" height="548" />

<h2><a href="https://github.com/hypermodules/gh-release">gh-release</a></h2>
<p>gh-release is a cli utility that deploys software releases to the Github <a href="https://developer.github.com/v3/repos/releases/">releases API</a>.</p>
<img src="/static/gh-release.gif" height="307" />

</div>

## FAQ

<dl>
    <dt>What is this?</dt>
    <dd>Hypermodules started as a github org to facilitate the development of hyperamp, a desktop music player built with web technologies. Lately its turned into a community garden of libraries and tools that <a href="https://twitter.com/zeke/status/826504522679791616">benefit</a> from collective <a href="http://ungoldman.com/articles/open-source-maintenance-guidelines/">open source shepherding</a> and maintenance.  Additionally, organizing provides shared access to costly resources like <a href="https://blog.dcpos.ch/how-to-make-your-electron-app-sexy">software signing certificates, LLC protections and access to resource consuming infrastructure</a>.</dd>
    <dt id="hypermodular">What is hypermodular development?</dt>
    <dd>Hypermodular development generally refers to a style of software development that emerged from early Node.js module authoring patterns. There is no official definition but the they seem to follow a few general patterns:
        <ul>
            <li><a href="http://substack.net/many_things">Unix-Like Philosophy</a>: Modules solve one problem well. Default to existing Unix conventions where they exist.</li>
            <li><a href="https://gist.github.com/substack/68f8d502be42d5cd4942#gistcomment-1365106">Written, Documented and Tested in isolation</a>.</li>
            <li><a href="https://www.reddit.com/r/node/comments/5t2hc8/stepbystep_tutorial_to_build_a_modern_javascript/">Principal of least action</a>: <a href="https://twitter.com/substack/status/682446137035456516">Aggressively</a> eliminate <a href="https://gist.github.com/substack/5075355">boilerplate</a>.  Work on the present, not the future.  Don't make folders with one file in them.  Add readme badges when you activate the service, not premptivly... etc</li>
            <li><a href="https://opbeat.com/community/posts/hypermodular-development-by-mathias-buus/">Hide your implementation</a>: Use <a href="http://mafintosh.com/pragmatic-modularity.html"><code>require</code></a> to hide implementation details. <a href="https://github.com/maxogden/abstract-blob-store">Find common ground</a> with <a href="https://github.com/juliangruber/abstract-random-access">other</a> <a href="https://github.com/Level/abstract-leveldown">modules</a> in the problem domain if you can. Avoid plug-in ecosystems.</li>
            <li><a href="https://twitter.com/substack/status/806724994193465346">Sort yourself out</a>: Build the solution that you need now, rather than restrict your reality to the limitations of someone else's configuration set.</li>
            <li>Don't shoot for the github stars: github stars are a bad quality metric. <a href="http://node-modules.com/?u=bcomnes">Use what others turn to</a>.</li>
            <li><a href="https://github.com/yoshuawuyts/tiny-guide-to-non-fancy-node">Keep it non-fancy</a>.</li>
            <li><a href="http://standardjs.com/">Write Standard Javascript</a>: no more bike shedding.  Only yak shaving.</li>
            <li><a href="http://module.party">"INSTALL WE TRUST"</a>: things should work as expected.</li>
            <li><a href="http://callbackhell.com/">Callback Heaven</a></li>
            <li><a href="http://openopensource.org">OPEN Open Source</a></li>
            <li><a href="https://github.com/hypermodules/hypermodul.es/issues/new">PR more ideas&#x2026;</a></li>
        </ul>
        <code>pragma > dogma</code  >.  These rules are intended to serve a similar purpose as a description of musical sub-genera rather than a coding style doctrine.  Don't be afraid to keep experimenting.
    </dd>
    <dt>Can I contribute?</dt>
    <dd>Sure! Hop on.</dd>
    <dt>Can I join the org?</dt>
    <dd>Probably, especially if you already have access to repos in the org. Reach out to a publicly listed <a href="https://github.com/orgs/hypermodules/people">org member</a>.</dd>
    <dt>Is there an IRC channel?</dt>
    <dd>
        <code>#hypermodules</code> on freenode.
        <a href="https://www.irccloud.com/invite?channel=%23hypermodules&amp;hostname=irc.freenode.net&amp;port=6697&amp;ssl=1" target="_blank"><img src="https://img.shields.io/badge/IRC-%23hypermodules-1e72ff.svg?style=flat-square" height="20">
        </a>
    </dd>
    <dt>What's with the background?</dt>
    <dd>Its a picture taken by <a href="https://www.pdx.edu/cemn/">PSU</a>'s FEI Tecnai F-20 tunneling electron microscope of some kind of gold lattice structure. Molecules and hypermodules share the same kind of vibe.☯</dd>
</dl>
