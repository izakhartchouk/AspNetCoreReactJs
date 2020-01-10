import { RootStore } from './RootStore';
import { observable, action, runInAction, computed } from 'mobx';
import { IProfile } from '../models/profile';
import agent from '../api/agent';

export default class ProfileStore {
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @observable profile: IProfile | null = null;
    @observable loadingProfile = true;

    @computed get isCurrentUser() {
        return this.rootStore.userStore.user && this.profile
            ? this.rootStore.userStore.user.username === this.profile.username
            : false;
    }

    @action loadProfile = async (username: string) => {
        this.loadingProfile = true;

        try {
            const profile = await agent.Profiles.get(username);

            runInAction(() => {
                this.profile = profile;
                this.loadingProfile = false;
            });
        } catch (error) {
            runInAction(() => {
                this.loadingProfile = false;
            });

            console.log(error);
        }
    };
}
