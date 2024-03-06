export const paths = {
    home() {
        return '/'
    },
    topicShow(topicSlug: string) {
        return `/topics/${topicSlug}`
    },
    createAPost(topicSlug: string) {
        return `/topics/${topicSlug}/posts/new`
    },
    showApost(topicSlug: string, postId: string) {
        return `/topics/${topicSlug}/posts/${postId}`
    }
}