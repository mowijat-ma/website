import DeviceDetector from "node-device-detector";
import DeviceHelper from "node-device-detector/helper";
export default function ArticlesPage(){
 
 const detector = new DeviceDetector();
const userAgent = 'Mozilla/5.0 (Linux; Android 5.0; NX505J Build/KVT49L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.78 Mobile Safari/537.36';
const result = detector.detect(userAgent);
    return (
        <div>
            articles page
            {/* {JSON.stringify(result)} */}
        </div>
    )
}