const pages = [`<h1>Introduction</h1>
<hr>
<p>This is the documentation of Seed, a 2D game engine for creating Windows and Linux games built in C#.</p>
<h3>Installation</h3>
<p>Seed can be installed these ways:</p>
<ul>
    <li>Windows:</li>
    <ul>
        <li>Clone the source code from <a class="textAnchor" href="https://github.com/Mitko0012/Seed" target="_blank">GitHub</a>.</li>
        <li>Download the release from <a class="textAnchor" href="https://github.com/Mitko0012/Seed/releases/" target="_blank">GitHub</a>.</li>
        <li>Get the SeedLib package from <a class="textAnchor" href="https://www.nuget.org/packages/SeedLib/" target="_blank">NuGet</a>.</li>
    </ul>
</ul>
<h3>Dependencies</h3>
<ul>
    <li>Windows</li>
    <ul>
        <li>Target framework: net8.0-windows</li>
        <li>NAudio 2.2.1</li>
    </ul>
</ul>
<br>
<p>After installing, create a new C# project targeting the target framework for the platform you're using and add a reference to Seed.</p>
<p>If you cloned the source code or downloaded the release from GitHub, then NAudio is already installed. If you got the SeedLib NuGet package, then go ahead and get the NAudio package from <a class="textAnchor" href="https://www.nuget.org/packages/NAudio" target="_blank">NuGet</a> and add it to your project.</p>`,
`<h1><code>public abstract class GameLogic</code></h1>
<hr> 
<p>The main class of Seed. All Seed scripts derive from it.</p>
<h3>Constructors:</h3>
<hr>
<code>public GameLogic()</code>
<p>Creates a new instance of the GameLogic class. Since the class is abstract, a new instance cannot be created directly.</p>
<p>Exceptions:</p>
<ul>
    <li><code>Exception</code>: Thrown if a GameLogic object gets created after the game loop is started.</li>
</ul>
<br>
<h3>Fields</h3>
<hr>
<code>public static Graphics G</code>
<p>The object used to draw elements on the game window. The user doesn't need to interact with it directly.</p>
<br>
<code>public static double UnitsOnCanvas</code>
<p>The number of game units currently present on the game window. 10 by default.</p>
<br>
<code>public static List&lt;STexture&gt; TileTextures</code>
<p>A list of STextures that represents the tile map textures. The item with index 0 is an empty STexture.</p>
<br>
<h3>Properties</h3>
<hr>
<code>public static int FrameNumber {get;}</code>
<p>Gets the count of the frames that have been sucessfully rendered. The value of it is 0 at the start. It increases by 1 with each sucessfully rendered frame.</p>
<br>
<code>public static int Width {get;}</code>
<p>Gets the width of the game window. 800 by default.</p>
<br>
<code>public static int Height {get;}</code>
<p>Gets the height of the game window. 600 by default.</p>
<br>
<code>public static int Height {get;}</code>
<p>Gets the height of the game window. 600 by default.</p>
<br>
<code>public static int DesiredFps {get; set;}</code>
<p>Gets or sets the desired FPS of the game. 60 by default.</p>
<p>Exceptions:</p>
<ul>
    <li><code>Exception</code>: Thrown when the value is attempted to be set to 0 or less.</li>
</ul>
<br>
<code>public static int Fps {get;}</code>
<p>Gets the actual FPS of the game.</p>
<br>
<code>public static double DeltaTime {get;}</code>
<p>Gets the time between the current and last frame.</p>
<br>
<h3>Methods</h3>
<hr>
<code>public abstract void OnStart()</code>
<p>Called when the game loop starts. It has to be overriden. It can be used to provide code to be executed when the game loop is started.</p>
<br>
<code>public abstract void OnFrame()</code>
<p>Called each frame. It has to be overriden. It can be used to provide code to be executed each frame.</p>
<br>
<code>public static void StartGameLoop()</code>
<p>Starts the game loop and opens the game window. If you have classes inheriting from <code>GameLogic</code>, their <code>OnStart</code> and <code>OnUpdate</code> methods won't get called unless the inheriting class got instantiated as an object before starting the game loop.</p>
<p>Exceptions:</p>
<ul>
    <li><code>Exception</code>: Thrown if the method is called more than once.</li>
</ul>
<br>
<code>public static void SetTitle(string title)</code>
<p>Sets the title of the game window.</p>
<p>Parameters:</p>
<ul>
    <li><code>title</code>: The text that gets set as the title of the game window.</li>
</ul>
<br>
<code>public static void SetSize(int width, int height)</code>
<p>Sets the size of the game window.</p>
<p>Parameters:</p>
<ul>
    <li><code>width</code>: A value in pixels that gets set as the width of the game window.</li>
    <li><code>height</code>: A value in pixels that gets set as the height of the game window.</li>22
</ul>
<br>
<code>public static void SetIcon(Icon icon)</code>
<p>Sets the icon of the game winodw.</p>
<p>Parameters:</p>
<ul>
    <li><code>icon</code>: The icon that gets set as the game window's icon.</li>
</ul>
<br>
<code>public static void AllowResizing(bool value)</code>
<p>Enables or disables resizing the game window.</p>
<p>Parameters:</p>
<ul>
    <li><code>value</code>: Defines whether the game window should be allowed to be resized or not.</li>
</ul>
<br>
<code>public static void SetFullScreen(bool value)</code>
<p>Sets the game window's size mode to windowed or full screen.</p>
<p>Parameters:</p>
<ul>
    <li><code>value</code>: Describes the size mode the game window is to be set. True if full screen, false if windowed.</li>
</ul>
<br>
<code>public static void SetColor(Color color)</code>
<p>Sets the background color of the game window.</p>
<p>Parameters:</p>
<ul>
    <li><code>color</code>: The color which the window's background color is to be set to.</li>
</ul>
<br>
<code>public static void Exit()</code>
<p>Exits the game.</p>
<br> `];

let content = document.getElementById("pageContent");

loadPage(0);

function loadPage(i) {
    content.innerHTML = pages[i];
}