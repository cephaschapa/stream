export const getToken = async () => {
    const res = await fetch(`https://streamio-api-v1.herokuapp.com/get-token`, {
        method: "GET"
    });

    const {token} = await res.json()
    
    return token;
}

// API call to create meeting
export const createMeeting = async ({token}) => {
    const res = await fetch(`https://streamio-api-v1.herokuapp.com/create-meeting`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({token}),
    });

    const data = await res.json();
    const {meetingId} = data.data;

    return meetingId;
}