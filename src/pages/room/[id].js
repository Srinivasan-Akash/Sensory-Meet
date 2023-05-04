import React from "react";
import styles from "@/styles/room.module.css";
import Image from "next/image";
export default function id() {
    let users = ["Akash", "Tanjiro"]
    
    function regroupMe(e) {
        let webcam = e.target.parentNode.parentNode;
        webcam.style.position = "absolute";
        webcam.style.transform = "translate(50%, 50%)  scaleX(0.75) scaleY(0.6) translate(75%, 0%)";
        webcam.style.transition = "all 1s ease";
        webcam.style.zIndex = "999";
        webcam.style.border = "1px solid lightBlue";
    }

      
  return (
    <section className={styles.main}>
      <main className={styles.webcams}>
      {users.map((item, index, array) => {
          let final;
          if (array.length == 1) {
            final = (
              <div className={styles.user} style={{aspectRatio: 1, height: "100%", minWidth: "100%", maxWidth: "100%"}}>
                <h1>{item}</h1>
              </div>
            );
          } else if (array.length == 2) {
            final = (
                <div className={styles.user} style={{height: "100%", minWidth: "45%", maxWidth: "45%"}}>
                  <h1>{item}</h1>
                </div>
              );
          } else {
            final = (
                <div className={styles.user}>
                  <h1>{item}</h1>
                  <div className={styles.overlayUser}>
                    <button onClick={(e) => pinMe(e)}>Pin Me</button>
                    <button onClick={(e) => regroupMe(e)}>Re-Group</button>
                    <button>Remove</button>
                  </div>
                </div>
              );
          }
          return final;
        })}
      </main>

      
        {/* OPTIONS */}
        <div className={styles.options}>
            <div className={styles.info}>
                <h3>ROOM NAME <span>|| 4:03AM</span></h3>
            </div>

            <div className={styles.tools}>
                <div className='audio'>
                    <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class="Hdh4hc cIGbvc NMm5M"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"></path><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"></path></svg>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000" class="Hdh4hc cIGbvc"><path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none"></path><path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"></path></svg> */}
                </div>

                <div className='video'>
                    <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class="Hdh4hc cIGbvc NMm5M"><path d="M18 10.48V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.48l4 3.98v-11l-4 3.98zm-2-.79V18H4V6h12v3.69z"></path></svg>                
                </div>

                <div className='screen'>
                    <Image src="/share.svg" alt="Next.js Logo" width={24} height={24} priority/>
                </div>

                <div className='subtitle'>
                    <Image src="/subtitles.png" alt="Next.js Logo" width={24} height={24} priority/>
                </div>

                <div className='emoji'>
                    <Image src="/happy.png" alt="Next.js Logo" width={24} height={24} priority/>
                </div>

                <div className='raise-hand'>
                    <svg enable-background="new 0 0 24 24" focusable="false" height="24" viewBox="0 0 24 24" width="24" class="Hdh4hc cIGbvc NMm5M"><rect fill="none" height="24" width="24"></rect><path d="M21,7c0-1.38-1.12-2.5-2.5-2.5c-0.17,0-0.34,0.02-0.5,0.05V4c0-1.38-1.12-2.5-2.5-2.5c-0.23,0-0.46,0.03-0.67,0.09 C14.46,0.66,13.56,0,12.5,0c-1.23,0-2.25,0.89-2.46,2.06C9.87,2.02,9.69,2,9.5,2C8.12,2,7,3.12,7,4.5v5.89 c-0.34-0.31-0.76-0.54-1.22-0.66L5.01,9.52c-0.83-0.23-1.7,0.09-2.19,0.83c-0.38,0.57-0.4,1.31-0.15,1.95l2.56,6.43 C6.49,21.91,9.57,24,13,24h0c4.42,0,8-3.58,8-8V7z M19,16c0,3.31-2.69,6-6,6h0c-2.61,0-4.95-1.59-5.91-4.01l-2.6-6.54l0.53,0.14 c0.46,0.12,0.83,0.46,1,0.9L7,15h2V4.5C9,4.22,9.22,4,9.5,4S10,4.22,10,4.5V12h2V2.5C12,2.22,12.22,2,12.5,2S13,2.22,13,2.5V12h2V4 c0-0.28,0.22-0.5,0.5-0.5S16,3.72,16,4v8h2V7c0-0.28,0.22-0.5,0.5-0.5S19,6.72,19,7L19,16z"></path></svg>
                </div>

                <div className='options'>
                    <Image src="/options.png" alt="Next.js Logo" width={24} height={24} priority/>
                </div>

                <div className={styles.call}>
                    <Image src="/end-call.png" alt="Next.js Logo" width={24} height={24} priority/>
                </div>
            </div>

            <div className={styles.details}>
                <div className='mute'>
                    <Image src="/info (1).png" alt="Next.js Logo" width={24} height={24} priority/>
                </div>

                <div className='mute'>
                <Image src="/team.png" alt="Next.js Logo" width={24} height={24} priority/>
                </div>

                <div className='mute'>
                <Image src="/setting.png" alt="Next.js Logo" width={24} height={24} priority/>

                </div>

                <div className='mute'>
                <Image src="/chat.png" alt="Next.js Logo" width={24} height={24} priority/>
                </div>

                <div className='mute'>
                <Image src="/puzzle.png" alt="Next.js Logo" width={24} height={24} priority/>
                </div>
            </div>
        </div>
    </section>
  );
}
