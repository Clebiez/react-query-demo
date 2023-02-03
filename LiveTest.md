- Refaire un rapide tour de l'app
- montrer setupTests.js
- Dans Loader.test.js compléter le test en testant que coucou n'est pas visible puis l'est

```JavaScript
    const { rerender } = render(<Loader isLoading={true}>Coucou</Loader>);
    expect(screen.queryByText("Coucou")).toBeNull();

    rerender(<Loader isLoading={false}>Coucou</Loader>);
    expect(screen.getByText("Coucou")).toBeVisible();
```

- CheeseListItem montrer le fichier de data central qui est cool
- Tenter d'écrire le premier test et voir qu'il manque le QueryClient
- Mocker useQuery dans le fichier setupTest.js
  ```JavaScript
    jest.mock('react-query', () => ({ useQuery: () => ({ isLoading: false, error: {}, data: [], }), }));
  ```
- Montrer le problème de router
- Expliquer la solution testUtils.jsx et changer les imports dans CheeseListItem.test.js

```JavaScript
it("When user click on vote button, Then should call onClickOnVoteCheese", async () => {
    const onClickOnVoteCheese = jest.fn();
    const user = userEvent.setup();
    render(
    <CheesesListItem
        cheese={cheese}
        onClickOnVoteCheese={onClickOnVoteCheese}
    />
    );
    await act(async () => {
    await user.click(screen.getByRole("button", { name: "Voter" }));
    });
    expect(onClickOnVoteCheese).toHaveBeenCalledTimes(1);
})
```

```JavaScript
    jest.mock("../../../services/hooks/useCheeseIsVoted", () => {
    return () => ({
        cheeseIsVoted: true,
    });
});

it("When cheese has already been voted by the user, Then vote button should be disabled", async () => {
    render(<CheesesListItem cheese={cheese} onClickOnVoteCheese={jest.fn()} />);
    expect(screen.getByRole("button", { name: "Voter" })).toBeDisabled();
});

```

- Après résolution du problème de mock

```JavaScript
let mockCheeseIsVoted = false;
jest.mock("../../../services/hooks/useCheeseIsVoted", () => {
    return () => ({
        cheeseIsVoted: mockCheeseIsVoted,
    });
});

it("When cheese has already been voted by the user, Then vote button should be disabled", async () => {
    mockCheeseIsVoted = true;
    render(<CheesesListItem cheese={cheese} onClickOnVoteCheese={jest.fn()} />);
    expect(screen.getByRole("button", { name: "Voter" })).toBeDisabled();
});
```

- Montrer comment mocker un composant avec le dernier test

```JavaScript
    const mockOnClick = jest.fn();
    jest.mock("react-router-dom", () => {
        return {
            ...jest.requireActual("react-router-dom"),
            Link: ({ to, children }) => (
                <button onClick={() => mockOnClick(to)}>{children}</button>
            ),
        };
    });

    it("When user click on detail button, Then he should be redirected to the detail page", async () => {
        const user = userEvent.setup();
        render(<CheesesListItem cheese={cheese} />);
        const detailButton = screen.getByRole("button", { name: "Détail" });
        await user.click(detailButton);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
        expect(mockOnClick).toHaveBeenCalledWith("/cheeses/1");
    });

```

- Dans CheeseList.test.js faire le test qui appel onSelectMilkType

  ```JavaScript
    it("When user select a milk type, Then should call onSelectMilkType", async () => {
        const onSelectMilkType = jest.fn();
        const user = userEvent.setup();
        render(
            <CheesesList
                milkTypes={milkTypes}
                cheeses={[]}
                onSelectMilkType={onSelectMilkType}
            />
        );

        await user.selectOptions(
        screen.getByRole("combobox"),
        screen.getByRole("option", { name: "Chèvre" })
        );
        expect(onSelectMilkType).toHaveBeenCalledTimes(1);
        expect(onSelectMilkType).toHaveBeenCalledWith("2");
    });

  ```

- Dans CheeseList.test.js faire le test qui appel onSelectMilkType

  ```JavaScript
    it("When user select a milk type, Then should call onSelectMilkType", async () => {
        const onSelectMilkType = jest.fn();
        const user = userEvent.setup();
        render(
            <CheesesList
                milkTypes={milkTypes}
                cheeses={[]}
                onSelectMilkType={onSelectMilkType}
            />
        );

        await user.selectOptions(
        screen.getByRole("combobox"),
        screen.getByRole("option", { name: "Chèvre" })
        );
        expect(onSelectMilkType).toHaveBeenCalledTimes(1);
        expect(onSelectMilkType).toHaveBeenCalledWith("2");
    });

  ```

- Dans CheeseList.test.js faire le test qui appel onSearch

  ```JavaScript
    it("When user search cheeses, Then should call onSearch", async () => {
        jest.useFakeTimers();
        const onSearch = jest.fn();
        const user = userEvent.setup({
            delay: null,
        });
        render(
            <CheesesList milkTypes={[]} cheeses={cheeses} onSearch={onSearch} />
        );
        await user.type(screen.getByRole("searchbox"), "Couic couic");
        // Avance rapide jusqu'à ce que toutes les temporisateurs aient été exécutés.
        jest.runAllTimers();

        expect(onSearch).toHaveBeenCalledTimes(1);
        expect(onSearch).toHaveBeenCalledWith("Couic couic");
        jest.useRealTimers();
    });

  ```

- Dans useToggle.test.js Montrer comment on peut tester un hook
- Dans useToggle.test.js montrer le probleme qui necessite un act

  ```JavaScript
    const { result } = renderHook(() => useToggle());

    expect(result.current.value).toBe(false);
    result.current.toggleValue();
    expect(result.current.value).toBe(true);
  ```
