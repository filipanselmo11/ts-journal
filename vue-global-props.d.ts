import axios from 'axios'


declare module 'vue' {
    interface ComponentCustomProps {
        $http: typeof axios
    }
}