import React from "react";

function Sort({handleShowOnlyNonDonors }) {
  return (
    <div>
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
