<template>
    <div>
    <div v-if="!profile">Need to auth thru
        <a href="/login">Google</a>
    </div>
    <div v-else >
        <div>{{profile.name}}&nbsp;<a href="/logout">Logout</a></div>
        <messages-list :messages="messages" />
        </div>
    </div>
</template>
<script>
    import MessagesList from 'components/messages/MessageList.vue'
    export default {
        compoents: {
            MessagesList
        },
        data() {
            return{
                messages: frontendData.messages,
                profile: frontendData.profile
            }
        }

    }
</script>
<style>

</style>