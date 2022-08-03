import { Fragment } from "react";

const data = [
  {
    id: 1,
    name: "JavaScript",
    imgPath:
      "https://www.freecodecamp.org/news/content/images/2021/06/javascriptfull.png",
    // isSelected: true,
    opt: [
      {
        name: "30 days",
        value: 30,
        price: 319,
        priceDiscount: 229,
        percentDiscount: 28,
      },
      {
        name: "90 days",
        value: 90,
        price: 186,
        priceDiscount: 116,
        percentDiscount: 37,
      },
      {
        name: "180 days",
        value: 180,
        price: 134,
        priceDiscount: 75,
        percentDiscount: 44,
      },
      {
        name: "365 days",
        value: 365,
        price: 106,
        priceDiscount: 56,
        percentDiscount: 49,
      },
    ],
  },
  {
    id: 2,
    name: "React JS",
    imgPath:
      "data:image/jpeg;base64,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",
    // isSelected: true,
    opt: [
      {
        name: "1 Sessions",
        value: 1,
        price: 799,
        priceDiscount: 499,
        percentDiscount: 38,
      },
      {
        name: "3 Sessions",
        value: 3,
        price: 2099,
        priceDiscount: 1299,
        percentDiscount: 38,
      },
      {
        name: "5 Sessions",
        value: 5,
        price: 3299,
        priceDiscount: 1999,
        percentDiscount: 39,
      },
    ],
    course: "session",
  },
  {
    id: 3,
    name: "Mock Interview",
    imgPath:
      "data:image/jpeg;base64,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",
    // isSelected: true,
    opt: [
      {
        name: "1 Sessions",
        value: 1,
        price: 2099,
        priceDiscount: 1299,
        percentDiscount: 38,
      },
      {
        name: "3 Sessions",
        value: 3,
        price: 2099,
        priceDiscount: 1299,
        percentDiscount: 38,
      },
      {
        name: "5 Sessions",
        value: 5,
        price: 3299,
        priceDiscount: 1999,
        percentDiscount: 39,
      },
    ],
    course: "session",
  },
];
export function CoursePackage() {
  return (
    <Fragment>
      <div className="container-fluid">
        {data.map((item, index) => (
          <div className="container container-top">
            <div className="row course d-flex">
              <div className="content-left d-flex">
                <span className="checkbox d-flex align-content-center">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    name=""
                    id="check-1"
                  />
                  <label htmlFor="check-1" className="checked-input"></label>
                  <i className="fa-solid fa-check icon-check checked"></i>
                </span>
                <img src={item.imgPath} alt="" className="img" />
                <div className="info-course">
                  <h5 className="title">
                    {item.name}
                    <i className="fa-solid fa-circle-info icon-info"></i>
                  </h5>
                  <p className="name_option-course">{item.name}</p>
                  <label htmlFor="" className="title-select">
                    Validity
                  </label>
                  <br />
                  <select name="" id="" className="select-course">
                    {item.opt.map(
                      ({
                        name,
                        value,
                        price,
                        priceDiscount,
                        percentDiscount,
                      }) => (
                        <Fragment>
                          <option value={value}>{name}</option>
                        </Fragment>
                      )
                    )}
                  </select>
                </div>
              </div>
              <div className="content-right d-flex">
                <div className="info-sale">
                  <p className="p price" id={item.id}>
                    $ {item.opt[0].priceDiscount}/month
                  </p>
                  <p className="p sale-off" id={item.id}>
                    ( {item.opt[0].percentDiscount} % off )
                  </p>
                  <p className="p price-initial" id={item.id}>
                    $ {item.opt[0].price}/month
                  </p>
                </div>
                <div className="price-sale" id={item.id}>
                  -$
                  {Math.floor(
                    (item.opt[0].price * item.opt[0].percentDiscount) / 100
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="container container-bottom">
          <div className="bill d-flex row align-items-center">
            <div className="bill-content-left">
              <p className="packages">Packages Includes</p>
              <p className="name-packages">
                JavaScript + React JS + Mock Interviews
              </p>
            </div>
            <div className="bill-content-center">
              <p className="param">Sub Total</p>
              <p>TOTAL AMOUNT</p>
            </div>
            <div className="bill-content-right">
              <div className="total-price-initial d-flex justify-content-between">
                <p>$ 2.654</p>
                <p style={{ color: "green" }}>-$ 2.233</p>
              </div>

              <div className="total-amount d-flex justify-content-between">
                <p>$ 2.654</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
