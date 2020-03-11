export async function getAllVideo() {
    try {
        const response = await fetch('https://hackathon.seetymood.com/api/videos');
        const responseJson = await response.json();
        return responseJson;
    }
    catch (error) {
        console.error(error);
    }
}