import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import crop from "../functions/cropString";
import LineBreak from "../components/LineBreak";

interface Props {
  title: string;
  description?: string;
  packages: Package[];
}

interface Package {
  title: string;
  description: string;
  link: string;
  image: string;
}

const PackagesList = (props: Props) => {
  const cropString = crop;
  return (
    <div className="package-list-container">
      <h1 className="title">
        <BsInfoCircle />
        <br className="title-hide" />
        <span>{props.title}</span>
        <p className="title-description">{props.description}</p>
      </h1>
      <div className="packages">
        {/* Map the pacages from props */}
        {props.packages.map((packageItem, index) => {
          return (
            <div
              className="package"
              key={index}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h2 className="package-title">
                <LineBreak str={packageItem.title} />
              </h2>
              <div className="package-content">
                <div className="package-img">
                  <img src={packageItem.image} alt="Package" />
                </div>
                <p className="package-description">
                  {cropString(packageItem.description, 200)}
                </p>
                <Link className="package-link offset" to={packageItem.link}>
                  Learn More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PackagesList;
