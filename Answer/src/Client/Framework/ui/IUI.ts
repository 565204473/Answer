namespace UI {
    export interface IUI {
        id: number;
        TryShow();
        Show();
        Hide();
        Destory();
        IsLoading(): boolean;
        IsVisible(): boolean;
        BringToTop();
        Update(deltaTime: number): void;
    }
}

