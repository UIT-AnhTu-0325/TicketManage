import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import "../featuredInfo/featuredInfo.css"

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Tickets Sold</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">1707</span>
                    <span className="featuredMoneyRate">
                        -200 <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$5,415</span>
                    <span className="featuredMoneyRate">
                        +11,4 <ArrowUpward className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}