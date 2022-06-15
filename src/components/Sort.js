import React from "react";

function Sort({ handleShowOnlyNonDonors }) {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id="showOnlyNonDonors"
        onChange={handleShowOnlyNonDonors}
      />
      <label htmlFor="showOnlyNonDonors">Show only non-donors </label>
    </div>
  );
}

export default Sort;
