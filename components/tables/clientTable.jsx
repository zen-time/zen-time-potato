import React from "react";

const ClientTable = () => {
  return (
    <div className="m-10">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-neutral-content">
              <th></th>
              <th>Business Name</th>
              <th>Client ID</th>
              <th>Email</th>
              <th>Contact Number</th>
              <th>Net Terms</th>
              <th>Termination Notice</th>
              <th>Status</th>
              <th>Category</th>
              <th>Additional Info</th>
              <th>Active Placements</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover">
              <th>1</th>
              <td>Akash </td>
              <td>75123</td>
              <td>akash@inc.com</td>
              <td>9629653377</td>
              <td>-</td>
              <td>-</td>
              <td>Inactive</td>
              <td>-</td>
              <td>-</td>
              <td>2</td>
              <td></td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Kesavan</td>
              <td>75124</td>
              <td>kesavan@inc.com</td>
              <td>8075423337</td>
              <td>-</td>
              <td>-</td>
              <td>Active</td>
              <td>-</td>
              <td>-</td>
              <td>5</td>
              <td></td>
            </tr>
            {/* row 3 */}
            <tr className="hover">
              <th>3</th>
              <td>Naveen Kumar</td>
              <td>75124</td>
              <td>naveen@inc.com</td>
              <td>902965723</td>
              <td>-</td>
              <td>-</td>
              <td>Inactive</td>
              <td>-</td>
              <td>-</td>
              <td>0</td>
              <td></td>
            </tr>
            {/* row 4 */}
            <tr className="hover">
              <th>4</th>
              <td>Arun Prakash</td>
              <td>75126</td>
              <td>arun@inc.com</td>
              <td>9945687219</td>
              <td>-</td>
              <td>-</td>
              <td>Active</td>
              <td>-</td>
              <td>-</td>
              <td>3</td>
              <td></td>
            </tr>
            {/* row 5 */}
            <tr className="hover">
              <th>5</th>
              <td>Manoj</td>
              <td>75126</td>
              <td>manoj@inc.com</td>
              <td>9956231245</td>
              <td>-</td>
              <td>-</td>
              <td>Active</td>
              <td>-</td>
              <td>-</td>
              <td>2</td>
              <td></td>
            </tr>
            {/* row 6 */}
            <tr className="hover">
              <th>6</th>
              <td>Vishnu</td>
              <td>75123</td>
              <td>vishnu@inc.com</td>
              <td>9366144319</td>
              <td>-</td>
              <td>-</td>
              <td>Inactive</td>
              <td>-</td>
              <td>-</td>
              <td>1</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientTable;
