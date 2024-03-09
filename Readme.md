<h1 class="code-line" data-line-start=1 data-line-end=2 ><a id="pytojs_1"></a>pytojs</h1>
<p class="has-line-data" data-line-start="3" data-line-end="4">This library allows you to run functions written in python through nodejs and send arguments to python</p>
<pre><code class="has-line-data" data-line-start="6" data-line-end="18" class="language-javascript"><span class="hljs-keyword">const</span> { pyProcess } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'pytojs'</span>);

<span class="hljs-keyword">const</span> pathToScript = <span class="hljs-string">'./your_script.py'</span>;

<span class="hljs-comment">//you don't need to use this line if you don't have any arguments to take in your python code</span>
<span class="hljs-keyword">const</span> scriptArgs = [<span class="hljs-string">'arg1'</span>, <span class="hljs-string">'arg2'</span>, <span class="hljs-string">'arg3'</span>];

<span class="hljs-keyword">const</span> result = pyProcess(pathToScript, scriptArgs);

<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Python betiğinden dönen sonuç:'</span>, result);

</code></pre>
<pre><code class="has-line-data" data-line-start="20" data-line-end="30" class="language-python"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">read_in</span><span class="hljs-params">()</span>:</span>
    lines = sys.stdin.readlines()
    <span class="hljs-keyword">return</span> json.loads(lines[<span class="hljs-number">0</span>])
    
<span class="hljs-comment"># in this section it is important to enter the arguments in order !!!</span>
arg1,arg2 = read_in()

<span class="hljs-comment"># now you can be use the other codes</span>

</code></pre>