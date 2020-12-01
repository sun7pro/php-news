<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="{{ asset('favicon.png') }}" type="image/x-icon" />
  <title>PHPNews | Home</title>
  <link href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>

<body>
  <main class="container">
    <div class="terminal-nav">
      <div class="terminal-logo">
        <div class="logo terminal-prompt"><a href="#" class="no-style">PHPNews</a></div>
      </div>
      <nav class="terminal-menu">
        <ul>
          <li><a class="menu-item" href="#">Add new</a></li>
          <li><a class="menu-item" href="#">Login</a></li>
        </ul>
      </nav>
    </div>
    <section class="main">
      <h1>Home</h1>
    </section>
    <footer>
      <hr/>
      <small>Copyright © Dec. 2020 <u>sun7pro</u>. All rights reserved.</small>  
    </footer>
  </main>
</body>
</html>
