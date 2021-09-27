/* Arbel */
@font-face {
    font-family: 'Arbel';
    src: url('../ArbelHagilda/ArbelHagilda_Bold.otf') format("opentype");
    font-weight: 500;
}
@font-face {
    font-family: 'Arbel';
    src: url('../ArbelHagilda/ArbelHagilda_Regular.otf') format("opentype");
    font-weight: 300;
}

body{
    background-color: #F1EEEC;
    overflow: hidden;
}
.storyDiv{
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
}
.wrapper{
    overflow: visible;
}
.storyDiv, .wrapper{
    margin: 0 !important;
    padding: 0 !important;
}
.storyDiv{
    background-color: #F0E3E1;
}
.storyDiv p, .storyDiv h1{
    width: 280px;
    margin: 0;
    padding: 0;
    margin-bottom: 16px;
    text-align: right;
    font-family: 'Arbel', serif;
    font-weight: 300;
    background: none;
}
/* .header h1{
    font-family: 'Franky', serif;
    font-weight: 300;
} */
.storyDiv h1{
    font-family: 'Arbel';
    font-weight: 300;
}
.clothImg{
    background-image: url(../img/cloth/OD1.jpg);
    background-color: #F0E3E1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    flex-grow: 1;
    width: 100%;
}
.plusIcon{
    background-image: url(../img/plus.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 35%;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    cursor: pointer;
}
.clothCard{
    position: absolute;
    top: 100%;
    right: 50%;
    width: 250px;
    padding: 16px;
    font-family: 'Arbel';
    font-weight: 300;
    background-color: rgba(242, 239, 237, 0.8);
}
.leftCard{
    left: 50%;
    right: auto;
}
.backButtonC, .forButtonC{
    top: auto;
    bottom: 140px;
}
.forButtonC{
    left: 200px;
}
.backButtonC{
    right: 200px;
}