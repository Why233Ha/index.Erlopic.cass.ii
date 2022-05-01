<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Erlopic Devur</title>

  <link rel="stylesheet" href="css/styles.css">
  <link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/6.1.1/css/all.css" rel="stylesheet">
  <link rel="stylesheet" href="css/mdui.min.css">
</head>

<body class="mdui-theme-layout-auto">

<div class="mdui-progress mdui-theme-primary-green loading" id="loading">
  <div class="mdui-progress-indeterminate"></div>
</div>

  <div class="mdui-bottom-nav mdui-bottom-nav-text-auto tab mdui-b-r-1">

    <a href="javascript:;" class="mdui-ripple">
      <i class="mdui-icon fas fa-bars">菜单</i>
    </a>

    <a href="javascript:;" id="easeNote" class="mdui-ripple mdui-bottom-nav-active">
      <i class="mdui-icon fas fa-note-sticky"></i>
      <label>简记</label>
    </a>
    <a href="javascript:;" class="mdui-ripple">
      <i class="mdui-icon fas fa-tasks"></i>
      <label>事项</label>
    </a>
    <a href="javascript:;" class="mdui-ripple">
      <i class="mdui-icon fas fa-star"></i>
      <label>标记</label>
    </a>
    <a href="javascript:;" class="mdui-ripple">
      <i class="mdui-icon fas fa-refresh"></i>
      <label>CA</label>
    </a>
    <a href="javascript:;" class="mdui-ripple">
      <i class="mdui-icon fas fa-building"></i>
      <label>广场</label>
    </a>
    <a href="javascript:;" class="mdui-ripple">
      <i class="mdui-icon fas fa-umbrella-beach"></i>
      <label>隐私</label>
    </a>
    </div>

    <div class="content">
      <iframe src="assets/pages/notes.php" frameborder="0"></iframe>
    </div>

    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/font-awesome/6.1.1/js/all.js"></script>
    <script src="js/mdui.min.js"></script>
    <script src="js/javascript.js"></script>
</body>

</html>