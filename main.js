moustacheX = 0;
moustacheY = 0;

function preload()
{
   moustache = loadImage ("https://i.postimg.cc/YqbYfRvr/mustache-student-math-favorite-for-friday-the-the-1.png");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        moustacheX = results[0].pose.nose.x;
        moustacheY = results[0].pose.nose.y;
        console.log("nose x = " + moustacheX);
        console.log("nose y = " + moustacheY);
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(moustache, moustacheX - 23, moustacheY, 45, 30);
}

function take_snapshot()
{
    save('Mustache_Filter.png'); 
}