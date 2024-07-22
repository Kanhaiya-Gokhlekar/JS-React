import React, { useEffect, useState } from "react";

function GitHub() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/hiteshchoudhary`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok ' + res.statusText);
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setData(data);
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
            });
    }, []);

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            {data ? (
                <>
                    <div>GitHub followers: {data.followers}</div>
                    <img src={data.avatar_url} alt='GitHub Avatar' width={300} />
                </>
            ) : (
                "Loading..."
            )}
        </div>
    );
}

export default GitHub;
