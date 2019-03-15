import React from "react";
import { render } from "react-dom";

class ChartAnalytics extends React.Component {
  render() {
    return (
      <div className="chartbox">
        <div className="chartbox--growth">
          <div className="chartbox__text-img">
            <p>Run select user case for</p>
          </div>
          <div className="chartbox__tagbox">
            <button className="badge badge--square badge--transparent badge--lg badge--text-left">
              Buy Side PE
            </button>
            <button className="badge badge--square badge--transparent badge--lg badge--text-left">
              Buy side Corporate
            </button>
            <button className="badge badge--square badge--transparent badge--lg badge--text-left">
              Sell side
            </button>
          </div>
        </div>

        <div className="chartbox--growth chartbox--bar">
          <div className="chartbox__text-img">
            <p>Top Charts</p>
          </div>
          <div className="chartbox__tagbox">
            <button className="badge badge--transparent badge--md badge--text-left">
              Acquirers
            </button>
            <button className="badge badge--transparent badge--md badge--text-left">
              Founders
            </button>
            <button className="badge badge--transparent badge--md badge--text-left">
              Institutional Investors
            </button>
            <button className="badge badge--transparent badge--md badge--text-left">
              Boardmembers
            </button>
            <button className="badge badge--transparent badge--md badge--text-left">
              Investment partners
            </button>
            <button className="badge badge--transparent badge--md badge--text-left">
              Corprate VCs
            </button>
            <button className="badge badge--transparent badge--md badge--text-left">
              Smart money investors
            </button>
            <button className="badge badge--transparent badge--md badge--text-left">
              Private Equity
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ChartAnalytics;
