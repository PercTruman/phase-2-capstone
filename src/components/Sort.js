import React from "react";

function Sort({handleShowNonDonors }) {
  return (
    <div>
      <input
        type="checkbox"
        id="showOnlyNonDonors"
        onChange={handleShowNonDonors}
      />
      <label htmlFor="showOnlyNonDonors">Show only non-donors </label>
    </div>
  );
}

export default Sort;
