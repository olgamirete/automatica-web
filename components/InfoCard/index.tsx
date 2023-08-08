export interface InfoCardProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {}

const InfoCard: React.FC<InfoCardProps> = ({ className, ...props }) => {
    return (
        <div className="d-flex my-5 justify-content-center">
            <div className="col-11 col-md-10 col-lg-6 col-xl-5">
                <div
                    className={`info-card rounded py-5 px-3 bg-opacity-50 ${className}`}
                    {...props}
                />
            </div>
        </div>
    );
};

export default InfoCard;
