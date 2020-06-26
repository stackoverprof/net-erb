<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <!-- Required meta tags -->
    <meta name="description" content="Welcome to errbint.net, The interactive personal website of R Bintang Bagus Putra Angkasa" />
    <meta name="robots" content="index, follow" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="icon" type="svg" href="{{asset('img/favicon.svg')}}">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="{{asset('css/abilities.css')}}">
    <link rel="stylesheet" href="{{asset('css/bottomer.css')}}">
    <link rel="stylesheet" href="{{asset('css/effect11.css')}}">
    <link rel="stylesheet" href="{{asset('css/fontface.css')}}">
    <link rel="stylesheet" href="{{asset('css/gamehead.css')}}">
    <link rel="stylesheet" href="{{asset('css/gradientmove.css')}}">
    <link rel="stylesheet" href="{{asset('css/jumbo.css')}}">
    <link rel="stylesheet" href="{{asset('css/loadingspin.css')}}">
    <link rel="stylesheet" href="{{asset('css/master.css')}}">
    <link rel="stylesheet" href="{{asset('css/navbot.css')}}">
    <link rel="stylesheet" href="{{asset('css/photogrid.css')}}">
    <link rel="stylesheet" href="{{asset('css/projects.css')}}">

    
    <link href="https://fonts.googleapis.com/css2?family=Biryani:wght@800;900&display=swap" rel="stylesheet">



    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/js/all.min.js"></script>

    <title>Errbint.NET</title>
</head>

<body>
<!-- <div class="navbotmain" id="navbotmain">
<div class="navbot" id="navbot">
        <div class="dropdown">
            <div>
                <div class="burger"></div>
                <div class="burger"></div>
                <div class="burger"></div>
            </div>
            <div>
                <h2 class="h2navigation" id="h2navigation">NAVIGATION</h2>
            </div>
        </div>
        <div class="">
            <a class="linktoscroll" href="">Profile</a>
            <a class="linktoscroll" href="">Abilities</a>
            <a class="linktoscroll" href="">Projects</a>
            <a class="linktoscroll" href="">Experiences</a>
        </div>
    </div>
</div> -->


    @yield('maincontent')


    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> -->
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script> -->
    <script  src="https://code.jquery.com/jquery-3.5.1.slim.min.js"  integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>

    <!-- <script src="js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script> -->
    <script>
        //little lib to document.getElementById
        function xdoc(idname){
            return document.getElementById(idname);
        }

    </script>
    <!-- optional js script -->
    @stack('scripts')

    @if(config('app.env') == 'local')
        <script src="http://localhost:35729/livereload.js"></script>
    @endif
</body>

</html>
