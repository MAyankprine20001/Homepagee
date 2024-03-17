import "./MiddleTest.scss";
import Button from "../Button/Button";

const MiddleSectionTest = () => {
    return (
      <div className="Middle_About_Section">
        <div className="Information">
          <div className="Information_Image">
            <img src="/public/Mask group.png" alt="" />
          </div>
          <div className="information_data">
            <div className="heading">
              <h3>Uber dies schule</h3>
            </div>
            <div className="para">
              <p>
                Unsere Schule befindet sich im Herzen der Stadt. Ohne unser
                Schulgebäude verlassen zu müssen, können die Kinder nach
                Unterrichtsende den Hort der Gemeinde besuchen. Der Schulstandort
                bietet neben unserer Volksschule auch Zugang zur Mittelschule und
                zur Hans-Hofer-Schule. Alle drei Schulen teilen sich eine
                großzügig gestaltete Sportanlage.
              </p>
  
              <p>
                An der Volksschule Ebreichsdorf, die 1971 erbaut wurde, werden
                derzeit 13 Klassen geführt. Der Schulgarten wird gemeinsam mit den
                Kindern und unseren Schulpartnern seit 2021 in kleinen Schritten
                ökologisch neu gestaltet. Eine gelebte Vision für die Kinder
                unserer Kinder!
              </p>
            </div>
            <div>
              <Button btn={"Erfanren sir jgbdbdgt"} className="Btn_Blue" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MiddleSectionTest;