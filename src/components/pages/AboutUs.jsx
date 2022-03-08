import React from "react";
import Header from "../header-components/Header";
import CarouselComponent from "../Carousel/CarouselComponent";
import Footer from "../Footer-Components/Footer";
import "../About-us-file/AboutUs.css";
function AboutUs() {
    return (
        <div className="react-body">
            <Header />
            <CarouselComponent />
            {/* Title */}
            <h1>ABOUT US</h1>
            <div className="top-bottom-section">
                <h3>Who We are</h3>
                <p className="para-edit" >We are lay men and women committed to spread the everlasting gospel of Jesus Christ as it is found in the Bible for preparing people to stand firm and strong in the Lord and getting ready for the imminent return of Jesus Christ. <br />
                    Members of The Last Call Messages are recognized to be individuals who are interested and blessed with the messages being live streamed on social Medias of the LCM.  Who are voluntarily lend their hands to support group’s activities, which are regularly taking place in every week.
                </p>
            </div>
            <div className="middle-section">
                <h3>Our Mission</h3>
                <p id="upper"> Our Mission is to preach to the world the everlasting Gospel of Jesus Christ and Awakening people for His Soon Return.</p>
                <div className="inner-section left-inner-section">
                    <h4>Matthew 28:18-20</h4>
                    <p className="para-edit" >
                        18 And Jesus came and spake unto them, saying, All power is given unto me in heaven and in earth. <br />
                        19 Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: <br />
                        20 Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen.
                    </p>
                </div>
                <div className="inner-section righ-inner-section">
                    <h4>Acts of the Apostles 1:8</h4>
                    <p className="para-edit" >
                        8 But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth.
                    </p>
                </div>
                <div className="inner-section-bottom">
                    <h4>Revelations 14:6-12</h4>
                    <p className="para-edit" style={{textAlign:"left"}}>
                        6 And I saw another angel fly in the midst of heaven, having the everlasting gospel to preach unto them that dwell on the earth, and to every nation, and kindred, and tongue, and people, <br />
                        7 Saying with a loud voice, Fear God, and give glory to him; for the hour of his judgment is come: and worship him that made heaven, and earth, and the sea, and the fountains of waters. <br />
                        8 And there followed another angel, saying, Babylon is fallen, is fallen, that great city, because she made all nations drink of the wine of the wrath of her fornication. <br />
                        9 And the third angel followed them, saying with a loud voice, If any man worship the beast and his image, and receive his mark in his forehead, or in his hand, <br />
                        10 The same shall drink of the wine of the wrath of God, which is poured out without mixture into the cup of his indignation; and he shall be tormented with fire and brimstone in the presence of the holy angels, and in the presence of the Lamb: <br />
                        11 And the smoke of their torment ascendeth up for ever and ever: and they have no rest day nor night, who worship the beast and his image, and whosoever receiveth the mark of his name. <br />
                        12 Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Jesus. <br />
                        We believe time is short, and it is almost time to go home.
                    </p>
                </div>
            </div>
            <div className="top-bottom-section">
                <h3>Our Vision</h3>
                <p className="para-edit" >Restore God’s image in all believers.
                    To make a difference in the lives of people by impacting them, Spiritually, Socially, and Physically so that they may become Christians soldiers with genuine faith for the soon second coming of Jesus Christ. <br />

                    Provide platform space to people for unusable talents in God’s Vineyard, they learn of opportunities of how they can become involved in some lay ministry.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs;