import SingleBedroom from "../../assets/images/single-bed 2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const rooms = () => {
  return (
    <>
      <div className=" bg-[#f5f5f5] w-full flex flex-col items-center py-10">
        {/* -----------HEADING------------ */}
        <div className="flex flex-col items-center mb-10">
          <h1 className=" font-Montserrat font-bold text-[30px]">
            Check-in Time: 12 Noon
          </h1>
          <h1 className=" font-Montserrat font-bold text-[30px]">
            Check-out Time: 12 Noon
          </h1>
          <p className="text-[#DD7210] text-[12px]">
            (Rates are subject to change without prior notice)
          </p>
        </div>
        {/*--------- ROOMS ---------- */}
        <div className="flex flex-col gap-4">
          {/* ------------ SINGLE ROOM ---------- */}
          <div className="w-full flex justify-center px-12">
            <div className="w-[50%] ">
              <img src={SingleBedroom} alt="" className="w-[450px]" />
            </div>
            <div className="flex flex-col items-center justify-center w-[50%] px-16 gap-3">
              <div className="flex flex-col gap-2">
                <h1 className=" font-CormorantGaramond text-[43px] italic font-bold text-left">
                  Single Room
                </h1>
                <p className="text-[10px] text-justify font-bold">
                  Welcome to our cozy Single Room, a perfect choice for solo
                  travelers seeking comfort and tranquility. This thoughtfully
                  designed room offers a harmonious blend of modern amenities
                  and classic charm.
                </p>
                <p className=" font-Montserrat">
                  Room Rate: <span className="text-[#9B8046]">₱ 980</span> /
                  NIGHT{" "}
                </p>
                <p className=" font-Montserrat">Good for: 1 person</p>
              </div>
              <div className="flex flex-col w-full  gap-3">
                <div className="flex w-full gap-2">
                  <div className=" w-6 h-6 bg-[#4CAF50] flex items-center justify-center rounded-full">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className=" text-[#ccff90]"
                    />
                  </div>
                  <p className="text-[12px] font-bold">
                    Fully air conditioned room
                  </p>
                </div>
                <div className="flex w-full gap-2">
                  <div className=" w-6 h-6 bg-[#4CAF50] flex items-center justify-center rounded-full">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className=" text-[#ccff90]"
                    />
                  </div>
                  <p className="text-[12px] font-bold">LED TV w/ cable</p>
                </div>
                <div className="flex w-full gap-2">
                  <div className=" w-6 h-6 bg-[#4CAF50] flex items-center justify-center rounded-full">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className=" text-[#ccff90]"
                    />
                  </div>
                  <p className="text-[12px] font-bold">Hot and cold shower</p>
                </div>
                <div className="flex w-full gap-2">
                  <div className=" w-6 h-6 bg-[#4CAF50] flex items-center justify-center rounded-full">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className=" text-[#ccff90]"
                    />
                  </div>
                  <p className="text-[12px] font-bold">
                    Free WIFI with 50mbps internet speed
                  </p>
                </div>
              </div>
              <div className=" w-full mt-4">
                <button className=" bg-[#DD7210] text-white px-3 py-2 rounded-sm text-[10px] font-bold">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
          {/* -------------- DOUBLE ROOM -------------------------------- */}
          <div className="w-full flex flex-row-reverse justify-center px-12">
            <div className="w-[50%] ">
              <img src={SingleBedroom} alt="" className="w-[450px]" />
            </div>
            <div className="flex flex-col items-center justify-center w-[50%] px-16  gap-2">
              <div className="flex flex-col gap-2">
                <h1 className=" font-CormorantGaramond text-[43px] italic font-bold text-left">
                  Double Room
                </h1>
                <p className="text-[10px] text-justify font-bold">
                  Step into comfort and elegance with our spacious Double Room,
                  designed to accommodate couples or travelers who appreciate a
                  bit of extra space. This inviting room combines modern
                  sophistication with a cozy ambiance for a truly relaxing stay.
                </p>
                <p className=" font-Montserrat">
                  Room Rate: <span className="text-[#9B8046]">₱ 1120</span> /
                  NIGHT{" "}
                </p>
                <p className="text-[12px] font-bold font-Montserrat">
                  1 Matrimonial Bed | plus 1 extra bed{" "}
                </p>
                <p className=" font-Montserrat">Good for: 2 to 3 persons</p>
              </div>
              <div className="flex flex-col w-full  gap-3">
                <div className="flex w-full gap-2">
                  <div className=" w-6 h-6 bg-[#4CAF50] flex items-center justify-center rounded-full">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className=" text-[#ccff90]"
                    />
                  </div>
                  <p className="text-[12px] font-bold">
                    Fully air conditioned room
                  </p>
                </div>
                <div className="flex w-full gap-2">
                  <div className=" w-6 h-6 bg-[#4CAF50] flex items-center justify-center rounded-full">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className=" text-[#ccff90]"
                    />
                  </div>
                  <p className="text-[12px] font-bold">LED TV w/ cable</p>
                </div>
                <div className="flex w-full gap-2">
                  <div className=" w-6 h-6 bg-[#4CAF50] flex items-center justify-center rounded-full">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className=" text-[#ccff90]"
                    />
                  </div>
                  <p className="text-[12px] font-bold">Hot and cold shower</p>
                </div>
                <div className="flex w-full gap-2">
                  <div className=" w-6 h-6 bg-[#4CAF50] flex items-center justify-center rounded-full">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className=" text-[#ccff90]"
                    />
                  </div>
                  <p className="text-[12px] font-bold">
                    Free WIFI with 50mbps internet speed
                  </p>
                </div>
              </div>
              <div className=" w-full mt-4">
                <button className=" bg-[#DD7210] text-white px-3 py-2 rounded-sm text-[10px] font-bold">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>

          {/* --------------- TWIN DOUBLE ------------------------------ */}
          <div className="w-full flex justify-center px-12">
            <div className="w-[50%] ">
              <img src={SingleBedroom} alt="" className="w-[450px]" />
            </div>
            <div className="flex flex-col items-center justify-center w-[50%] px-16  gap-2">
              <div className="flex flex-col ga2-1 w-full">
                <h1 className=" font-CormorantGaramond text-[40px] italic font-bold text-left">
                  Twin Standard Room
                </h1>
                <p className="text-[10px] text-justify font-bold">
                  Discover the perfect harmony of comfort and functionality in
                  our Twin Standard Room. Ideal for friends, family members, or
                  colleagues traveling together, this room provides a cozy
                  retreat with thoughtful amenities.
                </p>
                <p className=" font-Montserrat">
                  Room Rate: <span className="text-[#9B8046]">₱ 1250</span> /
                  NIGHT{" "}
                </p>
                <p>2 Single Beds / 1 Matrimonial Bed</p>
                <p className=" font-Montserrat">Good for: 2 to 3 persons</p>
              </div>
              <div className="flex flex-col w-full  gap-3">
                <div className="flex w-full gap-2">
                  <div className=" w-6 h-6 bg-[#4CAF50] flex items-center justify-center rounded-full">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className=" text-[#ccff90]"
                    />
                  </div>
                  <p className="text-[12px] font-bold">
                    Fully air conditioned room
                  </p>
                </div>
                <div className="flex w-full gap-2">
                  <div className=" w-6 h-6 bg-[#4CAF50] flex items-center justify-center rounded-full">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className=" text-[#ccff90]"
                    />
                  </div>
                  <p className="text-[12px] font-bold">LED TV w/ cable</p>
                </div>
                <div className="flex w-full gap-2">
                  <div className=" w-6 h-6 bg-[#4CAF50] flex items-center justify-center rounded-full">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className=" text-[#ccff90]"
                    />
                  </div>
                  <p className="text-[12px] font-bold">Hot and cold shower</p>
                </div>
                <div className="flex w-full gap-2">
                  <div className=" w-6 h-6 bg-[#4CAF50] flex items-center justify-center rounded-full">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className=" text-[#ccff90]"
                    />
                  </div>
                  <p className="text-[12px] font-bold">
                    Free WIFI with 50mbps internet speed
                  </p>
                </div>
              </div>
              <div className=" w-full mt-3">
                <button className=" bg-[#DD7210] text-white px-3 py-2 rounded-sm text-[10px] font-bold">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default rooms;