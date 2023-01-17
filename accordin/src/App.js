import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [data1, setData1] = useState(false);
  const [data2, setData2] = useState(false);
  const [data3, setData3] = useState(false);
  const [data4, setData4] = useState(false);

  return (
    <>
      <center>
        <div className="background">
          <h1 onClick={()=>setData1(!data1)}>option1</h1>
        {data1 ?<p>
            Be Passionate. And do what you for love. If you don’t love it, then
            why do it? If we build careers or continue in jobs that really
            aren’t our passion, we’re selling ourselves short. It’s like the guy
            that is a tech consultant that really wanted to be the lead singer
            of a band. I’ve written about love and careers before and I think
            that the takeaway here is that if you really do what YOU want to do,
            you will be more creative, more motivated, more tuned-in, and much
            more likely to be very financially and personally prosperous.
            Katherine Hepburn said it best,
          </p>:""}
        </div>
      </center>
      <center>
        <div className="background">
        <h1 onClick={()=>setData2(!data2)}>option2</h1>
        {data2 ?<p>
            Work Hard. Don’t ever fool yourself—success comes from really hard
            work. And you might find that although you’re doing all of the heavy
            lifting, there is satisfaction in a job well done. But remember that
            you need to rely on others, so make sure that you surround yourself
            with colleagues that share your same work ethic.
          </p>:""}
        </div>
      </center>
      <center>
        <div className="background">
        <h1 onClick={()=>setData3(!data3)}>option1</h1>
        {data3 ?<p>
            Be Good. And by that, I mean damn good. Successful people strive for
            greatness, not mediocrity. So push yourself (and your team) to
            ensure that you’ve reached your ultimate potential. And be sure to
            celebrate your wins, that not only breeds confidence among your
            team, it will keep your colleagues engaged and also will keep your
            clients or customers enfranchised. If you haven’t read the book from
            Good to Great, grab a copy.
          </p>:""}
        </div>
      </center>
      <center>
        <div className="background">
        <h1 onClick={()=>setData4(!data4)}>option1</h1>
        {data4 ?<p>
            Focus. Focus always proceeds success—which is not possible without a
            clear emphasis on what matters most. And leaders constantly need to
            remind themselves of this vital truth. Focus requires the pursuit of
            a mission and vision.
          </p>:""}
        </div>
      </center>
    </>
  );
};

export default App;
