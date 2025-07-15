<script setup lang="ts">
definePageMeta({
    layout: 'admin-layout',
})
</script>

<template>
    <div>
        <AdminCardGrid title="Dashboard ">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AdminDashboardStatsCard icon="mdi-account-group" title="Total Users" value="1,205" color="blue" />
                <AdminDashboardStatsCard icon="mdi-image-multiple" title="Total Memories" value="4,382" color="green" />
                <AdminDashboardStatsCard icon="mdi-database" title="Storage Usage" value="86.4 GB" color="purple" />
            </div>
        </AdminCardGrid>
    </div>
</template>
