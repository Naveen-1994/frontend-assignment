
export const getFundsData = async () => {
    const response = await fetch("https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json");

    return await response.json();
}