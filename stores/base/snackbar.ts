export const useSnackBarStore = defineStore('snackbar', () => {
    const snackBar = ref<{ state: boolean, text: string, type: string }>({
        state: false,
        text: '',
        type: ''
    });

    const setSnackBar = (payload: { text: string, type: string }) => {
        snackBar.value.text = payload.text;
        snackBar.value.type = payload.type;
        snackBar.value.state = true;
    }

    return {
        snackBar,
        setSnackBar
    }
})