import "./index.css";
import IconLinkedIn from "assets/icons/linkedin.svg";
import IconGitHub from "assets/icons/github.svg";
import IconWebsite from "assets/icons/website.svg";

export interface MemberCardProps {
    picSrc: string;
    name: string;
    subtitle: string;
    urlLinkedIn?: string;
    urlGitHub?: string;
    urlWebsite?: string;
}

const MemberCard: React.FC<MemberCardProps> = ({
    picSrc,
    name,
    subtitle,
    urlLinkedIn,
    urlGitHub,
    urlWebsite,
}) => {
    return (
        <div className="col mb-4">
            <div className="card bg-transparent border-0 text-light">
                <div className="row flex-nowrap">
                    <div className="d-flex align-items-center justify-content-center col-6">
                        <img
                            src={picSrc}
                            className="card-img-top rounded rounded-circle max-height-profile-pic"
                            alt={`Profile picture of ${name}`}
                        />
                    </div>
                    <div className="ps-0 col">
                        <div className="card-body ps-0">
                            <div className="mb-0 card-title h5">{name}</div>
                            <div className="card-text fw-light text-nowrap mb-1">
                                {subtitle}
                            </div>
                            <div className="card-text">
                                {urlLinkedIn && (
                                    <a
                                        href={urlLinkedIn}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-social-team"
                                    >
                                        <IconLinkedIn />
                                    </a>
                                )}
                                {urlGitHub && (
                                    <a
                                        href={urlGitHub}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-social-team"
                                    >
                                        <IconGitHub />
                                    </a>
                                )}
                                {urlWebsite && (
                                    <a
                                        href={urlWebsite}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-social-team"
                                    >
                                        <IconWebsite />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberCard;
