<template>
    <div class="footer">
       
    </div>
    <button @click="sendEvent">A button</button>
</template>

<script>

export default ({
    setup(props, context) {
        function sendEvent() {
            context.emit('callEvent', props)
        }
        return {
            sendEvent
        }
    },
    props: ['title'],
    emits: ['callEvent']
})
</script>

