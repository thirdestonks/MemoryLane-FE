<script setup lang="ts">
const props = defineProps({
    dialogTitle: { type: String, default: 'Dialog Title' },
    buttonName: String,
    textClass: { type: String, default: "tw-font-semibold" },
    showButton: { type: Boolean, default: true },
    maxWidth: { type: String, default: '800px' },
    fullscreen: { type: Boolean, default: false },
    persistent: { type: Boolean, default: true },
    icon: { type: String, default: undefined },
    size: { type: String, default: 'default' },
    disable: { type: Boolean, default: false },
    color: { type: String, default: "#E49E32" },
    variant: { type: String, default: "elevated" }, //elevated, flat (hides v-btn shadow), text (buttonName only but hovers the whole rectangular button),
    // outlined, plain (will only hover the buttonName or Button-ICONS), icon
    rounded: { type: String, default: undefined }, //sets border-radius to buttons (xl, sm, lg, xs)

});

const model = defineModel({ type: Boolean, default: false });
const { dialogTitle, buttonName, maxWidth, fullscreen, persistent, icon, color, size, variant, rounded, disable } = props;
</script>

<template>
    <BaseButton v-if="showButton" @click="model = true" :size="size" :color="color" :disabled="disable" :text="buttonName" :textClass="textClass" :icon="icon" :variant="variant" :rounded="rounded" />
    <!-- Use buttonName to rename the button -->

    <v-dialog v-model="model" :max-width="maxWidth" :fullscreen="fullscreen" :persistent="persistent">
        <v-card outlined elevation="4" class="tw-my-4 tw-mx-4 pa-2">
            <v-card-title>
                <div class="tw-flex tw-flex-col">
                    <div class="tw-flex tw-flex-row-reverse">
                        <v-btn icon elevation="0" color="white" @click="model = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </div>
                    <div class="tw-flex tw-flex-col tw-text-center">
                        <div class="tw-font-semibold text-capitalize mt-n9">{{ dialogTitle }}</div>
                    </div>
                </div>
            </v-card-title>
            <!-- Use dialogTitle to rename the dialog title -->

            <v-card-text>
                <slot />
            </v-card-text>

        </v-card>
    </v-dialog>
</template>

<!-- <BaseDialogBox maxWidth="1200px" dialogTitle="Dialog Title Here" icon="mdi-icon-name" title buttonName="Button Name" /> -->