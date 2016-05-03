(function(){
          var numbers = 0;
          setInterval(function(){
            var x = timer.end();
            timer.start();
            if(x > 1.250 || x < 0.750){
              numbers++;
            }
            if(numbers > 3){
              alert('System Overload!!');
              numbers = 0;
            }
          },1000);

          var timer = (function(){
            var obj = {};
            var begin = null;
            var finish = null;

            obj.start = function(){
              begin = null;
              finish = null;
              begin = new Date().getTime();
            }

            obj.end = function(){
              finish = (begin)?new Date().getTime() - begin:0;
              var n = finish/1000;
              //console.log(n + 's');
              return n;
            }
            return obj;
          })();
        })()
