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
<p>Seed uses the following framework: <code>net8.0-windows</code></p>
<h3>Dependencies</h3>
<ul>
    <li>NAudio 2.2.1</li>
</ul>
<br>
<p>After installing, create a new C# project targeting the framework that Seed uses and add a reference to Seed.</p>
<p>If you cloned the source code or you got the SeedLib NuGet package, then NAudio is already installed. If you downloaded the release from GitHub, then go ahead and get the NAudio package from <a class="textAnchor" href="https://www.nuget.org/packages/NAudio" target="_blank">NuGet</a> and add it to your project.</p>`,
`<h1><code>public abstract class GameLogic</code></h1>
<hr> 
<p>The main class of Seed. All Seed scripts derive from it.</p>
<h3>Constructors</h3>
<hr>
<code>public GameLogic()</code>
<p>Creates a new instance of the GameLogic class. Since the class is abstract, a new instance cannot be created directly.</p>
<p>Exceptions:</p>
<ul>
    <li><code>Exception</code>: Thrown if a GameLogic object gets created after the game loop has been started.</li>
</ul>
<br>
<h3>Fields</h3>
<hr>
<code>public static double UnitsOnCanvas</code>
<p>The number of game units currently present on the game window. 10 by default.</p>
<br>
<code>public static List&lt;STexture&gt; TileTextures</code>
<p>A list of STextures that represents the tile map textures. The item with index 0 is an empty STexture.</p>
<br>
<code>public static bool UseMaximumSize</code>
<p>A value saying whether the engine should use a maximum render size.</p>
<br>
<code>public static int MaximumSize</code>
<p>The maximum render size of either axel. The other one will get scaled relatively based on the screen ratio. It is only used if <code>MaximumSize</code> has a value of <code>true</code></p>
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
<br> `,
`<h1><code>public abstract class Element</code></h1>
<hr>
<p>The class from which each game element class derives. A game element is an object that gets displayed on the screen. It has features such as collision checking.</p>
<h3>Fields</h3>
<hr>
<code>public double PosX</code>
<p>The X position of the element in game units.</p>
<br>
<code>public double PosY</code>
<p>The Y position of the element in game units.</p>
<br>
<code>public bool IsSticky</code>
<p>True if the element should be sticky(independent from the camera positionm), false if not.</p>
<br>
<h3>Methods</h3>
<hr>
<code>public virtual void Draw()</code>
<p>Draws the element on the game window.</p>
<br>
<code>public virtual void DrawOnSection(DrawingSection section)</code>
<p>Draws the element on a drawing section.</p>
<p>Parameters:</p>
<ul>
    <li><code>section</code>: The section to draw the element on.</li>
</ul>
<br>`,
`<h1><code>public class CollidableElement : Element</code></h1>
<hr>
<p>This class represents elements which can be directly checked for collision without creating colliders.</p>
<h3>Fields</h3>
<hr>
<code>public double Width</code>
<p>The width of the element in game units.</p>             
<br>
<code>public double Height</code>
<p>The height of the element in game units.</p>             
<br>
<code>public double RotationCenterX</code>
<p>The X position of the center of rotation of the element in game units. Relative to the PosX of the element. 0 by default.</p>             
<br>
<code>public double RotationCenterY</code>
<p>The Y position of the center of rotation of the element in pixels. Relative to the PosY of the element. 0 by default.</p>             
<br>
<code>public double Angle</code>
<p>The angle of rotation of the element. 0 by default.</p>             
<br>`,
`<h1><code>public class Ellipse : CollidableElement</code></h1>
<hr>
<p>A full ellipse element.</p>
<h3>Constructors</h3>
<hr>
<code>public Ellipse(double posX, double posY, double width, double height, Color color)</code>
<p>Creates a new instance of the Ellipse class.</p>
<p>Parameters:</p>
<ul>
    <li><code>posX</code>: Value to be set as the X position.</li>
    <li><code>posY</code>: Value to be set as the Y position.</li>
    <li><code>width</code>: Value to be set as the width.</li>
    <li><code>height</code>: Value to be set as the height.</li>
    <li><code>color</code>: Value to be set as the background color.</li>
</ul>
<br>
<h3>Properties</h3>
<hr>
<code>public Color BackgroundColor {get; set;}</code>
<p>Gets or sets the color of the ellipse.</p>
<br>
<h3>Methods</h3>
<hr>
<code>public override void Draw()</code>
<p>Draws the ellipse on the game window.</p>
<br>
<code>public override void DrawOnSection(DrawingSection section)</code>
<p>Draws the ellipse on a DrawingSection.</p>
<p>Parameters:</p>
<ul>
    <li><code>section</code>: The section to draw the ellipse on.</li>
</ul>
<br>`,
`<h1><code>public class EmptyEllipse : CollidableElement</code></h1>
<hr>
<p>An empty ellipse element.</p>
<h3>Constructors</h3>
<hr>
<code>public EmptyEllipse(double posX, double posY, double height, double width, double ellipseWidth, Color color)</code>
<p>Creates a new instance of the EmptyEllipse class.</p>
<p>Parameters:</p>
<ul>
    <li><code>posX</code>: Value to be set as the X position.</li>
    <li><code>posY</code>: Value to be set as the Y position.</li>
    <li><code>width</code>: Value to be set as the width.</li>
    <li><code>height</code>: Value to be set as the height.</li>
    <li><code>ellipseWidth</code>: Value to be set as the outline width</li>
    <li><code>color</code>: Value to be set as the color.</li>
</ul>
<br>
<h3>Properties</h3>
<hr>
<code>public double OvalWidth {get; set;}</code>
<p>Gets or sets the width of the outline of the ellipse in game units.</p>
<br>
<code>public Color Color {get; set;}</code>
<p>Gets or sets the color of the outline of the ellipse.</p>
<br>
<h3>Methods</h3>
<hr>
<code>public override void Draw()</code>
<p>Draws the empty ellipse on the game window.</p>
<br>
<code>public override void DrawOnSection(DrawingSection section)</code>
<p>Draws the empty ellipse on a DrawingSection.</p>
<p>Parameters:</p>
<ul>
    <li><code>section</code>: The section to draw the empty ellipse on.</li>
</ul>
<br>`,
`<h1><code>public class FullRectangle : CollidableElement</code></h1>
<hr>
<p>A full rectangle element.</p>
<h3>Constructors</h3>
<hr>
<code>public FullRectangle(double posX, double posY, double width, double height, Color color)</code>
<p>Creates a new instance of the FullRectange class.</p>
<p>Parameters:</p>
<ul>
    <li><code>posX</code>: Value to be set as the X position.</li>
    <li><code>posY</code>: Value to be set as the Y position.</li>
    <li><code>width</code>: Value to be set as the width.</li>
    <li><code>height</code>: Value to be set as the height.</li>
    <li><code>color</code>: Value to be set as the background color.</li>
</ul>
<br>
<h3>Properties</h3>
<hr>
<code>public Color BackgroundColor {get; set;}</code>
<p>Gets or sets the color of the rectangle.</p>
<br>
<h3>Methods</h3>
<hr>
<code>public override void Draw()</code>
<p>Draws the full rectangle on the game window.</p>
<br>
<code>public override void DrawOnSection(DrawingSection section)</code>
<p>Draws the full rectangle on a DrawingSection.</p>
<p>Parameters:</p>
<ul>
    <li><code>section</code>: The section to draw the full rectangle on.</li>
</ul>`,
`<h1><code>public class EmptyRectangle : CollidableElement</code></h1>
<hr>
<p>An empty rectange element.</p>
<h3>Constructors</h3>
<hr>
<code>public EmptyRectangle(double posX, double posY, double width, double height, double rectangleWidth, Color color)</code>
<p>Creates a new instance of the EmptyRectange class.</p>
<p>Parameters:</p>
<ul>
    <li><code>posX</code>: Value to be set as the X position.</li>
    <li><code>posY</code>: Value to be set as the Y position.</li>
    <li><code>width</code>: Value to be set as the width.</li>
    <li><code>height</code>: Value to be set as the height.</li>
    <li><code>ellipseWidth</code>: Value to be set as the outline width</li>
    <li><code>color</code>: Value to be set as the color.</li>
</ul>
<br>
<h3>Properties</h3>
<hr>
<code>public double RectangleWidth {get; set;}</code>
<p>Gets or sets the width of the outline of the rectangle in game units.</p>
<br>
<code>public Color Color {get; set;}</code>
<p>Gets or sets the color of the outline of the rectangle.</p>
<br>
<h3>Methods</h3>
<hr>
<code>public override void Draw()</code>
<p>Draws the empty rectangle on the window.</p>
<br>
<p>Draws the empty rectangle on a DrawingSection.</p>
<p>Parameters:</p>
<ul>
    <li><code>section</code>: The section to draw the empty rectangle on.</li>
</ul>`,
`<h1><code>public class Sprite : CollidableElement</code></h1>
<hr>
<p>A sprite element.</p>
<h3>Constructors</h3>
<hr>
<code>public Sprite(double posX, double posY, double sizeX, double sizeY, STexture texture)</code>
<p>Creates a new instance of the Sprite class.</p>
<p>Parameters:</p>
<ul>
    <li><code>posX</code>: Value to be set as the X position.</li>
    <li><code>posY</code>: Value to be set as the Y position.</li>
    <li><code>sizeX</code>: Value to be set as the width.</li>
    <li><code>sizeY</code>: Value to be set as the height.</li>
    <li><code>texture</code>: Value to be set as the image texture.</li>
</ul>
<br>
<h3>Properties</h3>
<hr>
<code>public STexture Texture {get; set;}</code>
<p>Gets or sets the image texture of the sprite.</p>
<br>
<h3>Methods</h3>
<hr>
<code>public override void Draw()</code>
<p>Draws the sprite onto the screen.</p>
<br>
<code>public override void DrawOnSection(DrawingSection section)</code>
<p>Draws the sprite on a DrawingSection.</p>
<p>Parameters:</p>
<ul>
    <li><code>section</code>: The section to draw the sprite on.</li>
</ul>`,
`<h1><code>public class Line : Element</code></h1>
<hr>
<p>A line element.</p>
<h3>Constructors</h3>
<hr>
<code>public Line(double posX, double posY, double endPosX, double endPosY, double width, Color color)</code>
<p>Creates a new instance of the Line class.</p>
<p>Parameters:</p>
<ul>
    <li><code>posX</code>: Value to be set as the X position.</li>
    <li><code>posY</code>: Value to be set as the Y position.</li>
    <li><code>endPosX</code>: Value to be set as the end X position.</li>
    <li><code>endPosY</code>: Value to be set as the end Y position.</li>
    <li><code>width</code>: Value to be set as the width of the line.</li>
    <li><code>color</code>: Value to be set as the color.</li>
</ul>
<br>
<h3>Fields</h3>
<hr>
<code>public double EndPosX</code>
<p>The X position of the end point of the line in game units.</p>
<br>
<code>public double EndPosY</code>
<p>The Y position of the end point of the line in game units.</p>
<br>
<h3>Properties</h3>
<code>public Color Color {get; set;}</code>
<p>Gets or sets the color of the line.</p>
<br>
<code>public double Width {get; set;}</code>
<p>Gets or sets the width of the line in game units.</p>
<br>
<h3>Methods</h3>
<hr>
<code>public override void Draw()</code>
<p>Draws the line on the game window.</p>
<br>
<code>public override void DrawOnSection(DrawingSection section)</code>
<p>Draws the line on a DrawingSection.</p>
<p>Parameters:</p>
<ul>
    <li><code>section</code>: The section to draw the line on.</li>
</ul>`,
`<h1><code>public class Text : Element</code></h1>
<hr>
<p>A text element.</p>
<h3>Constructors</h3>
<hr>
<code>public Text(double posX, double posY, double size, string font, string text)</code>
<p>Creates a new instance of the Text class.</p>
<p>Parameters:</p>
<ul>
    <li><code>posX</code>: Value to be set as the X position.</li>
    <li><code>posY</code>: Value to be set as the Y position.</li>
    <li><code>size</code>: Value to be set as the size.</li>
    <li><code>font</code>: Value to be set as the font.</li>
    <li><code>text</code>: Value to be set as the display text.</li>
</ul>
<br>
<h3>Fields</h3>
<hr>
<code>public string DisplayText</code>
<p>The content of the text.</p>
<br>
<code>public HTextAlignment HorisontalAlignment</code>
<p>The horizontal alignment of the text. Left by default.</p>
<br>
<code>public VTextAlignment VerticalAlignment</code>
<p>The vertical aligment of the text. Bottom by default.</p>
<br>
<h3>Properties</h3>
<code>public Color Color {get; set;}</code>
<p>Gets or sets the color of the text. Black by default.</p>
<br>
<code>public string Font {get; set;}</code>
<p>Gets or sets the font of the text. Arial by default.</p>
<br>
<code>public double Size {get; set;}</code>
<p>Gets or sets the size of the text in game units.</p>
<br>
<h3>Methods</h3>
<hr>
<code>public override void Draw()</code>
<p>Draws the text on the screen.</p>
<br>
<code>public override void DrawOnSection(DrawingSection section)</code>
<p>Draws the text on a DrawingSection.</p>
<p>Parameters:</p>
<ul>
    <li><code>section</code>: The section to draw the text on.</li>
</ul>`,
`<h1><code>public class Collider</code></h1>
<hr>
<p>Box colliders that can be attached to elements. This class also has static methods to check if colliders are colliding</p>
<h3>Constructors</h3>
<hr>
<code>public Collider(double relativeXStart, double relativeXEnd, double relativeYStart, double relativeYEnd, Element element)</code>
<p>Creates a new collider.</p>
<p>Parameters:</p>
<ul>
    <li><code>relativeXStart</code>: Value to be set as <code>RelativeXStart</code></li>
    <li><code>relativeXEnd</code>: Value to be set as <code>RelativeXEnd</code></li>
    <li><code>relativeYStart</code>: Value to be set as <code>RelativeYStart</code></li>
    <li><code>relativeYEnd</code>: Value to be set as <code>RelativeYEnd</code></li>
    <li><code>element</code>: Value to be set as <code>ParentElement</code></li>
</ul>
<br>
<h3>Properties</h3>
<hr>
<code>public double RelativeXStart{get; set;}</code>
<p>Gets or sets the start of the collider on the X axis in game units relative to the parent element's X position.</p>
<br>
<code>public double RelativeXEnd{get; set;}</code>
<p>Gets or sets the end of the collider on the X axis in game units relative to the parent element's X position.</p>
<br>
<code>public double RelativeYStart{get; set;}</code>
<p>Gets the start of the collider on the Y axis in game units relative to the parent element's Y position.</p>
<br>
<code>public double RelativeYEnd{get; set;}</code>
<p>Gets or sets the end of the collider on the Y axis in game units relative to the parent element's Y position.</p>
<br>
<code>public Element ParentElement{get; set;}</code>
<p>Gets or sets the parent element of the collider.</p>
<br>
<h3>Methods</h3>
<code>static public bool IsColliding(CollidableElement element, CollidableElement element2)</code>
<p>Checks if two collidable elements are colliding.</p>
<p>Parameters:</p>
<ul>
    <li><code>element</code>: The first element.</li>
    <li><code>element2</code>: The second element.</li>
</ul>
<p>Returns: <code>true</code> if the elements are colliding, <code>false</code> if not.</p>
<br>
<code>static public bool IsColliding(CollidableElement element, Collider collider)</code>
<p>Checks if a collidable element is colliding with a collider.</p>
<p>Parameters:</p>
<ul>
    <li><code>element</code>: The collidable element.</li>
    <li><code>collider</code>: The collider.</li>
</ul>
<p>Returns: <code>true</code> if the element and the collider are colliding, <code>false</code> if not.</p>
<br>
<code>static public bool IsColliding(Collider collider, Collider collider2)</code>
<p>Checks if two colliders are colliding.</p>
<p>Parameters:</p>
<ul>
    <li><code>collider</code>: The first collider.</li>
    <li><code>collider2</code>: The second collider.</li>
</ul>
<p>Returns: <code>true</code> if the colliders are colliding, <code>false</code> if not.</p>
<br>
<code>static public bool IsPointInside(CollidableElement element, double pointX, double pointY)</code>
<p>Checks if a point is inside a collidable element.</p>
<p>Parameters:</p>
<ul>
    <li><code>element</code>: The element.</li>
    <li><code>pointX</code>: The X position of the point in game units</li>
    <li><code>pointY</code>: The Y position of the point in game units.</li>
</ul>
<p>Returns: <code>true</code> if the point is inside the element, <code>false</code> if not.</p>
<code>static public bool IsPointInside(Collider collider, double pointX, double pointY)</code>
<p>Checks if a point is inside a collider.</p>
<p>Parameters:</p>
<ul>
    <li><code>collider</code>: The collider.</li>
    <li><code>pointX</code>: The X position of the point in game units</li>
    <li><code>pointY</code>: The Y position of the point in game units.</li>
</ul>
<p>Returns: <code>true</code> if the point is inside the collider, <code>false</code> if not.</p>
<br>`,
`<h1><code>public static class Camera</code></h1>
<hr>                
<p>The game camera.</p>
<h3>Fields</h3>
<hr>
<code>public static double PosX</code>
<p>The X position of the camera in game units.</p>
<br>
<code>public static double PosY</code>
<p>The Y position of the camera in game units.</p>
<br>`,
`<h1><code>public class Tilemap : Element</code></h1>
<hr>
<p>Represents a tile map element.</p>
<h3>Constructors</h3>
<hr>
<code>public Tilemap()</code>
<p>Creates an instance of the tilemap class.</p>
<br>
<h3>Fields</h3>
<hr>
<code>public List&lt;List&lt;int&gt;&gt; Map</code>
<p>Represents the tile map where each value corresponds to an index of an item in <code>GameLogic.TileTextures</code>.</p>
<br>
<h3>Methods</h3>
<hr>
<code>public override void Draw()</code>
<p>Draws the tile map on the screen.</p>
<br>
<code>public override void DrawOnSection(DrawingSection section)</code>
<p>Draws the tilemap on a DrawingSection.</p>
<p>Parameters:</p>
<ul>
    <li><code>section</code>: The section to draw the tilemap on.</li>
</ul>`,
`<h1><code>public static class Mouse</code></h1>
<hr>
<p>A class that represents mouse input.</p>
<h3>Properties</h3>
<hr>
<code>public static double PosX {get;}</code>
<p>Gets the X position of the mouse in game units.</p>
<br>
<code>public static double PosY {get;}</code>
<p>Gets the Y position of the mouse in game units.</p>
<br>
<code>public static bool LeftDown {get;}</code>
<p>Gets whether the left mouse button is down.</p>
<br>
<code>public static bool MiddleDown {get;}</code>
<p>Gets whether the middle mouse button is down.</p>
<br>
<code>public static bool RightDown {get;}</code>
<p>Gets whether the right mouse button is down.</p>
<br>
<h3>Methods</h3>
<code>public static void GetMousePos(object? sender, MouseEventArgs e)</code>
<p>The event handler for when the mouse is moved. This method shouldn't be called directly</p>
<p>Parameters:</p>
<ul>
    <li><code>sender</code>: The object that raises the event.</li>
    <li><code>e</code>: The event arguments.</li>
</ul>
<br>
<code>public static void OnMouseDown(object? sender, MouseEventArgs e)</code>
<p>The event handler for when a mouse button is clicked. This method shouldn't be called directly</p>
<p>Parameters:</p>
<ul>
    <li><code>sender</code>: The object that raises the event.</li>
    <li><code>e</code>: The event arguments.</li>
</ul>
<br>
<code>public static void OnMouseUp(object? sender, MouseEventArgs e)</code>
<p>The event handler for when a mouse button is released. This method shouldn't be called directly</p>
<p>Parameters:</p>
<ul>
    <li><code>sender</code>: The object that raises the event.</li>
    <li><code>e</code>: The event arguments.</li>
</ul>
<br>`,
`<h1><code>public static class KeyHandler</code></h1>
<hr>
<p>A class that represents keyboard input.</p>
<h3>Properties</h3>
<code>public static Dictionary&lt;string, bool&gt; KeysDown {get};</code>
<p>Gets a hash map that contains all the keys and whether each one of them is pressed or not.</p>
<br>
<h3>Methods</h3>
<hr>
<code>public static void KeyDown(object? sender, KeyEventArgs e)</code>
<p>The event handler for when a key is pressed. This method shouldn't be called directly</p>
<p>ParametersL</p>
<ul>
    <li><code>sender</code>: The object that raises the event.</li>
    <li><code>e</code>: The event arguments.</li>
</ul>
<br>
<code>public static void KeyUp(object? sender, KeyEventArgs e)</code>
<p>The event handler for when a key is released. This method shouldn't be called directly</p>
<p>Parameters:</p>
<ul>
    <li><code>sender</code>: The object that raises the event.</li>
    <li><code>e</code>: The event arguments.</li>
</ul>
<br>`,
`<h1><code>public class STexture</code></h1>
<hr>
<p>Class that represents a texture.</p>
<h3>Constructors</h3>
<hr>
<code>public STexture(string texturePath, STextureOrigin origin)</code>
<p>Creates an instance of the STexture class.</p>
<p>Parameters:</p>
<ul>
    <li><code>texturePath</code>: The file path to the image or the name of the embedded resource.</li>
    <li><code>origin</code>: The origin of the image.</li>
</ul>
<br>
<code>public STexture(int width, int height)</code>
<p>Creates an instance of the STexture class with an empty image.</p>
<p>Parameters:</p>
<ul>
    <li><code>width</code>: The width of the image.</li>
    <li><code>height</code>: The height of the image.</li>
</ul>
<br>
<code>public STexture(STexture originTexture)</code>
<p>Creates an instance of the STexture class using the image of another STexture.</p>
<p>Parameters:</p>
<ul>
    <li><code>originTexture</code>: The <code>STexture</code> whose image will be used by the <code>STexture</code> that will be created.</li>
</ul>
<br>
<h3>Properties</h3>
<hr>
<code>public Image Image {get;}</code>
<p>Gets the source image of the texture.</p>
<br>`,
`<h1><code>public enum STextureOrigin</code></h1>
<hr>
<p>Represents the origin of an STexture.</p>
<h3>Fields</h3>
<hr>
<code>FilePath</code>
<p>Represents an image loaded from a file.</p>
<br>
<code>EmbeddedImage</code>
<p>Represents an image loaded as an embedded resource.</p>
<br>`,
`<h1><code>public class SectionedSTexture</code></h1>
<hr>
<p>Class that represents a texture from which only a section is to be drawn.</p>
<h3>Constructors</h3>
<hr>
<code>public SectionedSTexture(STexture originTexture, int posX, int posY, int width, int height)</code>
<p>Creates an instance of the SectionedSTexture class using an existing STexture.</p>
<p>Parameters:</p>
<ul>
    <li><code>originTexture</code>: The <code>STexture</code> whose texture will be used by the created <code>SectionedSTexture</code>.</li>
    <li><code>posX</code>: The X origin of the section to draw in pixels.</li>
    <li><code>posY</code>: The Y origin of the section to draw in pixels.</li>
    <li><code>width</code>: The width of the section to draw in pixels.</li>
    <li><code>height</code>: The height of the section to draw in pixels.</li>
</ul>
<br>
<h3>Fields</h3>
<code>public int OriginX</code>
<p>The X origin of the section to draw in pixels.</p>
<br>
<code>public int OriginY</code>
<p>The Y origin of the section to draw in pixels.</p>
<br>
<code>public int Width</code>
<p>The width of the section to draw in pixels.</p>
<br>
<code>public int Height</code>
<p>The height of the section to draw in pixels.</p>
<br>
`,
`<h1><code>public class Animation</code></h1>
<hr>
<p>Simple animations for sprites.</p>
<h3>Constructors</h3>
<hr>
<code>public Animation(Sprite sprite, int waitTime, bool isLooping, params STexture[] frames)</code>
<p>Creates a new animation.</p>
<p>Parameters:</p>
<ul>
    <li><code>sprite</code>: The sprite the animation is gonna play on.</li>
    <li><code>waitTime</code>: The time each animation frame is shown. If certain frames should be shown longer, an item of the <code>WaitTimes</code> array can be changed.</li>
    <li><code>isLooping</code>: Whether the animation should loop after it finishes playing.</li>
    <li><code>frames</code>: The frames of the animation.</li>
</ul>
<br>
<h3>Properties</h3>
<hr>
<code>public int[] WaitTimes {get; set;}</code>
<p>Gets or sets an array that represents the time each animation frame is shown.</p>
<br>
<code>public bool IsRunning {get;}</code>
<p>Gets whether the animation is running.</p>
<br>
<code>public bool Looping {get; set;}</code>
<p>Gets or sets whether the animation should loop after it ends.</p>
<br>
<h3>Methods</h3>
<hr>
<code>public void StartAnimation()</code>
<p>Starts the animation.</p>
<br>
<code>public void StopAnimation()</code>
<p>Stops the animation.</p>
<br>`,
`<h1><code>public class Sound : IDisposable</code></h1>
<hr>
<p>A class that represents a sound.</p>
<h3>Constructors</h3>
<hr>
<code>public Sound(string path, float volume, bool looping)</code>
<p>Creates an object of the Sound class.</p>
<p>Parameters:</p>
<ul>
    <li><code>path</code>: The filepath of the sound file.</li>
    <li><code>volume</code>: The volume of the sound. A float between 0 and 1.</li>
    <li><code>looping</code>: True if the sound should loop, otherwise false.</li>
</ul>
<br>
<h3>Properties</h3>
<hr>
<code>public bool IsPlaying {get;}</code>
<p>Gets whether the sound is currently playing.</p>
<br>
<code>public bool IsPaused {get;}</code>
<p>Gets whether the sound is currently paused. If the sound is not playing, the value of this property is false.</p>
<br>
<code>public bool Looping {get; set;}</code>
<p>Gets or sets if the sound should loop after it ends playing.</p>
<br>
<code>public float Volume {get; set;}</code>
<p>Gets or sets the volume of the sound.</p>
<br>
<h3>Methods</h3>
<hr>
<code>public void Play()</code>
<p>Plays the sound.</p>
<br>
<code>public void Stop()</code>
<p>Stops the sound.</p>
<br>
<code>public void Dispose()</code>
<p>Disposes the resources used by the sound.</p>
<br>`,
`<h1><code>public static class EmbdeddedResourceLoader</code></h1>
<hr>
<p>This class contains methods for loading embedded resources.</p>
<br>
<h3>Fields</h3>
<hr>
<code>public static Assembly? CurrAssembly</code>
<p>Represents the current assembly of the program. Has to be initialized before resources could be loaded.</p>
<br>
<h3>Methods</h3>
<code>public static Bitmap LoadImg(string name)</code>
<p>Loads an embedded image resource.</p>
<p>Properties:</p>
<ul>
    <li><code>name</code>: The name of the resource</li>
</ul>
<p>Returns: The resource represented as a <code>Bitmap</code> object.</p>
<p>Exceptions:</p>
<ul>
    <li><code>Exception</code>: Thrown if the resource can't found.</li>
</ul>
<br>
<code>public static string LoadTextFile(string name)</code>
<p>Loads an embedded text file resource.</p>
<p>Properties:</p>
<ul>
    <li><code>name</code>: The name of the resource</li>
</ul>
<p>Returns: The resource's contents.</p>
<p>Exceptions:</p>
<ul>
    <li><code>Exception</code>: Thrown if the resource can't found.</li>
</ul>
<br>`,
`<h1><code>public static class ObjectSerialization</code></h1>
<hr>
<h3>Methods</h3>
<hr>
<code>public static void SerializeJsonToFile&lt;T&gt;(T ob, string filePath)</code>
<p>Serializes an object in JSON and saves it in a file.</p>
<p>Type parameters:</p>
<ul>
    <li><code>T</code>: The type of the object.</li>
</ul>
<p>Parameters:</p>
<ul>
    <li><code>ob</code>: The object to be serialized.</li>
    <li><code>filePath</code>: The path where the file will be saved.</li>
</ul>
<br>
<code>public static string SerializeJson&lt;T&gt;(T ob)</code>
<p>Serializes an object to JSON.</p>
<p>Type parameters:</p>
<ul>
    <li><code>T</code>: The type of the object.</li>
</ul>
<p>Parameters:</p>
<ul>
    <li><code>ob</code>: The object to be seiralized.</li>
</ul>
<p>Returns: The JSON serialization of the object.</p>
<br>
<code>public static T? DeserializeJsonFromFile&lt;T&gt;(string filePath)</code>
<p></p>
<p>Type parameters:</p>
<ul>
    <li><code>T</code>: The type of the object.</li>
</ul>
<p>Parameters:</p>
<ul>
    <li><code>filePath</code>: The JSON source file.</li>
</ul>
<p>Returns: A deserialized object from the JSON source.</p>
<br>
<code>public static T? DeserializeJson&lt;T&gt;(string json)</code>
<p>Deserializes an object from JSON.</p>
<p>Type parameters:</p>
<ul>
    <li><code>T</code>: The type of the object.</li>
</ul>
<p>Parameters:</p>
<ul>
    <li><code>json</code>: The JSON to be deserialized.</li>
</ul>
<p>Returns: A deserialized object from the JSON source.</p>
<br>
<code>public static void SerializeXmlToFile&lt;T&gt;(T ob, string filePath)</code>
<p></p>
<p>Type parameters:</p>
<ul>
    <li><code>T</code>: The type of the object.</li>
</ul>
<p>Parameters:</p>
<ul>
    <li><code>ob</code>: The object to be serialized.</li>
    <li><code>filePath</code>: The path where the file will be saved.</li>
</ul>
<br>
<code>public static string SerializeXml&lt;T&gt;(T ob)</code>
<p>Serializes an object to XML.</p>
<p>Type parameters:</p>
<ul>
    <li><code>T</code>: The type of the object.</li>
</ul>
<p>Parameters:</p>
<ul>
    <li><code>ob</code>: The object to be serialized.</li>
</ul>
<p>Returns: The XML serialization of the object.</p>
<br>
<code>public static T? DeserializeXmlFromFile&lt;T&gt;(string filePath)</code>
<p></p>
<p>Type parameters:</p>
<ul>
    <li><code>T</code>: The type of the object.</li>
</ul>
<p>Parameters:</p>
<ul>
    <li><code>filePath</code>: The path to the XML source file.</li>
</ul>
<p>Returns: A deserialized object from the XML source.</p>
<br>
<code>public static T? DeserializeXml&lt;T&gt;(string xml)</code>
<p>Deserializes an object from XML.</p>
<p>Type parameters:</p>
<ul>
    <li>T<code>T</code>: The type of the object.</li>
</ul>
<p>Parameters:</p>
<ul>
    <li><code>xml</code>: The XML to be deserialized.</li>
</ul>
<p>Returns: A deserialized object from the XML source.</p>
<br>`,
`<h1><code>public static class EmbdeddedResourceLoader</code></h1>
<hr>
<h3>Methods</h3>
<hr>
<code>public static double NeutralToGame(double value, bool IsPos, bool IsX, bool IsSticky)</code>
<p>Converts a position or scale from pixels to game units.
<p>Parameters:</p>
<ul>
    <li><code>value</code>: The value to be converted.</li>
    <li><code>IsPos</code>: Whether the value is a position. If the value is a scale, it should be false.</li>
    <li><code>IsX</code>: Whether the value represents a position on the X axle. If the value is represents a position on the Y axle, it should be false. If the value is a scale, the value of this doesn't matter.</li>
    <li><code>IsSticky</code>: Whether the method should return a sticky position. If the value is a scale, the value of this doesn't matter.</li>
</ul>
<p>Returns: The value, converted in game units.</p>
<br>
<code>public static double GameToNeutral(double value, bool IsPos, bool IsX, bool IsSticky)</code>
<p>Converts a position or scale from game units to pixels.
<p>Parameters:</p>
<ul>
    <li><code>value</code>: The value to be converted.</li>
    <li><code>IsPos</code>: Whether the value is a position. If the value is a scale, it should be false.</li>
    <li><code>IsX</code>: Whether the value represents a position on the X axle. If the value is represents a position on the Y axle, it should be false. If the value is a scale, the value of this doesn't matter.</li>
    <li><code>IsSticky</code>: Whether the method should assume <code>value</code> is a sticky position. If the value is a scale, the value of this doesn't matter.</li>
</ul>
<p>Returns: The value, converted in pixels.</p>
<br>
`,
`<h1><code>public class DrawingSection : CollidableElement</code></h1>
<p>An element on which other elements can be drawn</p>
<hr>
<h3>Constructors</h3>
<hr>
<code>public DrawingSection(double posX, double posY, double width, double height)</code>
<p>Creates a new DrawingSection object</p>
<p>Parameters:</p>
<ul>
    <li><code>posX</code>: The X position of the section in game units.</li>
    <li><code>posY</code>: The Y position of the section in game units.</li>
    <li><code>width</code>: The width of the section in game units.</li>
    <li><code>height</code>: The height of the section in game units.</li>
</ul>
<br>
<h3>Methods</h3>
<hr>
<code>public void Reset()</code>
<p>Resets the content of the drawing section. Should be called before any elements are drawn on it and before the section itself is drawn</p>
<br>
<code>public override void Draw()</code>
<p>Draws the section on the game window. Should be called after all the elements you want to be drawn on the section have been drawn on the section.</p>
`];